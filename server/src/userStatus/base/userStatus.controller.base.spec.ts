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
import { UserStatusController } from "../userStatus.controller";
import { UserStatusService } from "../userStatus.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  status: "exampleStatus",
  intValue: 42,
  doubleValue: 42.42,
  stringValue: "exampleStringValue",
  dateValue: new Date(),
  blobValue: "exampleBlobValue",
  updateTime: new Date(),
  streamId: "exampleStreamId",
};
const CREATE_RESULT = {
  id: "exampleId",
  status: "exampleStatus",
  intValue: 42,
  doubleValue: 42.42,
  stringValue: "exampleStringValue",
  dateValue: new Date(),
  blobValue: "exampleBlobValue",
  updateTime: new Date(),
  streamId: "exampleStreamId",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    status: "exampleStatus",
    intValue: 42,
    doubleValue: 42.42,
    stringValue: "exampleStringValue",
    dateValue: new Date(),
    blobValue: "exampleBlobValue",
    updateTime: new Date(),
    streamId: "exampleStreamId",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  status: "exampleStatus",
  intValue: 42,
  doubleValue: 42.42,
  stringValue: "exampleStringValue",
  dateValue: new Date(),
  blobValue: "exampleBlobValue",
  updateTime: new Date(),
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

describe("UserStatus", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserStatusService,
          useValue: service,
        },
      ],
      controllers: [UserStatusController],
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

  test("POST /userStatuses", async () => {
    await request(app.getHttpServer())
      .post("/userStatuses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        dateValue: CREATE_RESULT.dateValue.toISOString(),
        updateTime: CREATE_RESULT.updateTime.toISOString(),
      });
  });

  test("GET /userStatuses", async () => {
    await request(app.getHttpServer())
      .get("/userStatuses")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          dateValue: FIND_MANY_RESULT[0].dateValue.toISOString(),
          updateTime: FIND_MANY_RESULT[0].updateTime.toISOString(),
        },
      ]);
  });

  test("GET /userStatuses/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userStatuses"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /userStatuses/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userStatuses"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        dateValue: FIND_ONE_RESULT.dateValue.toISOString(),
        updateTime: FIND_ONE_RESULT.updateTime.toISOString(),
      });
  });

  test("POST /userStatuses existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/userStatuses")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        dateValue: CREATE_RESULT.dateValue.toISOString(),
        updateTime: CREATE_RESULT.updateTime.toISOString(),
      })
      .then(function () {
        agent
          .post("/userStatuses")
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
