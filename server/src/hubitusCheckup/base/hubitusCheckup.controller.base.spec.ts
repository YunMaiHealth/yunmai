import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { HubitusCheckupController } from "../hubitusCheckup.controller";
import { HubitusCheckupService } from "../hubitusCheckup.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  testTime: new Date(),
  currentHabitus: "exampleCurrentHabitus",
  testResult: "exampleTestResult",
  countResult: "exampleCountResult",
  suggest: "exampleSuggest",
};
const CREATE_RESULT = {
  id: "exampleId",
  testTime: new Date(),
  currentHabitus: "exampleCurrentHabitus",
  testResult: "exampleTestResult",
  countResult: "exampleCountResult",
  suggest: "exampleSuggest",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    testTime: new Date(),
    currentHabitus: "exampleCurrentHabitus",
    testResult: "exampleTestResult",
    countResult: "exampleCountResult",
    suggest: "exampleSuggest",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  testTime: new Date(),
  currentHabitus: "exampleCurrentHabitus",
  testResult: "exampleTestResult",
  countResult: "exampleCountResult",
  suggest: "exampleSuggest",
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("HubitusCheckup", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: HubitusCheckupService,
          useValue: service,
        },
      ],
      controllers: [HubitusCheckupController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /hubitusCheckups", async () => {
    await request(app.getHttpServer())
      .post("/hubitusCheckups")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        testTime: CREATE_RESULT.testTime.toISOString(),
      });
  });

  test("GET /hubitusCheckups", async () => {
    await request(app.getHttpServer())
      .get("/hubitusCheckups")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          testTime: FIND_MANY_RESULT[0].testTime.toISOString(),
        },
      ]);
  });

  test("GET /hubitusCheckups/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/hubitusCheckups"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /hubitusCheckups/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/hubitusCheckups"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        testTime: FIND_ONE_RESULT.testTime.toISOString(),
      });
  });

  test("POST /hubitusCheckups existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/hubitusCheckups")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        testTime: CREATE_RESULT.testTime.toISOString(),
      })
      .then(function () {
        agent
          .post("/hubitusCheckups")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
