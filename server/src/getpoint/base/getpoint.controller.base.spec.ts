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
import { GetpointController } from "../getpoint.controller";
import { GetpointService } from "../getpoint.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  getPointTime: new Date(),
  points: 42,
  getPointType: "exampleGetPointType",
};
const CREATE_RESULT = {
  id: "exampleId",
  getPointTime: new Date(),
  points: 42,
  getPointType: "exampleGetPointType",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    getPointTime: new Date(),
    points: 42,
    getPointType: "exampleGetPointType",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  getPointTime: new Date(),
  points: 42,
  getPointType: "exampleGetPointType",
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

describe("Getpoint", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: GetpointService,
          useValue: service,
        },
      ],
      controllers: [GetpointController],
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

  test("POST /getpoints", async () => {
    await request(app.getHttpServer())
      .post("/getpoints")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        getPointTime: CREATE_RESULT.getPointTime.toISOString(),
      });
  });

  test("GET /getpoints", async () => {
    await request(app.getHttpServer())
      .get("/getpoints")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          getPointTime: FIND_MANY_RESULT[0].getPointTime.toISOString(),
        },
      ]);
  });

  test("GET /getpoints/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/getpoints"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /getpoints/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/getpoints"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        getPointTime: FIND_ONE_RESULT.getPointTime.toISOString(),
      });
  });

  test("POST /getpoints existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/getpoints")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        getPointTime: CREATE_RESULT.getPointTime.toISOString(),
      })
      .then(function () {
        agent
          .post("/getpoints")
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
