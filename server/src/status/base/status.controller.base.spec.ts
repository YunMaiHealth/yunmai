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
import { StatusController } from "../status.controller";
import { StatusService } from "../status.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  updateTime: new Date(),
  status: "exampleStatus",
  intValue: 42,
  doubleValue: 42.42,
  stringValue: "exampleStringValue",
  dateValue: new Date(),
  blobValue: "exampleBlobValue",
  streamId: "exampleStreamId",
};
const CREATE_RESULT = {
  id: "exampleId",
  updateTime: new Date(),
  status: "exampleStatus",
  intValue: 42,
  doubleValue: 42.42,
  stringValue: "exampleStringValue",
  dateValue: new Date(),
  blobValue: "exampleBlobValue",
  streamId: "exampleStreamId",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    updateTime: new Date(),
    status: "exampleStatus",
    intValue: 42,
    doubleValue: 42.42,
    stringValue: "exampleStringValue",
    dateValue: new Date(),
    blobValue: "exampleBlobValue",
    streamId: "exampleStreamId",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  updateTime: new Date(),
  status: "exampleStatus",
  intValue: 42,
  doubleValue: 42.42,
  stringValue: "exampleStringValue",
  dateValue: new Date(),
  blobValue: "exampleBlobValue",
  streamId: "exampleStreamId",
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

describe("Status", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StatusService,
          useValue: service,
        },
      ],
      controllers: [StatusController],
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

  test("POST /statuses", async () => {
    await request(app.getHttpServer())
      .post("/statuses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        updateTime: CREATE_RESULT.updateTime.toISOString(),
        dateValue: CREATE_RESULT.dateValue.toISOString(),
      });
  });

  test("GET /statuses", async () => {
    await request(app.getHttpServer())
      .get("/statuses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          updateTime: FIND_MANY_RESULT[0].updateTime.toISOString(),
          dateValue: FIND_MANY_RESULT[0].dateValue.toISOString(),
        },
      ]);
  });

  test("GET /statuses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/statuses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /statuses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/statuses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        updateTime: FIND_ONE_RESULT.updateTime.toISOString(),
        dateValue: FIND_ONE_RESULT.dateValue.toISOString(),
      });
  });

  test("POST /statuses existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/statuses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        updateTime: CREATE_RESULT.updateTime.toISOString(),
        dateValue: CREATE_RESULT.dateValue.toISOString(),
      })
      .then(function () {
        agent
          .post("/statuses")
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
