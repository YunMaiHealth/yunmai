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
import { UserQuestionController } from "../userQuestion.controller";
import { UserQuestionService } from "../userQuestion.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  questionTime: new Date(),
  questionTitle: "exampleQuestionTitle",
  questionContent: "exampleQuestionContent",
  isPublic: "exampleIsPublic",
};
const CREATE_RESULT = {
  id: "exampleId",
  questionTime: new Date(),
  questionTitle: "exampleQuestionTitle",
  questionContent: "exampleQuestionContent",
  isPublic: "exampleIsPublic",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    questionTime: new Date(),
    questionTitle: "exampleQuestionTitle",
    questionContent: "exampleQuestionContent",
    isPublic: "exampleIsPublic",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  questionTime: new Date(),
  questionTitle: "exampleQuestionTitle",
  questionContent: "exampleQuestionContent",
  isPublic: "exampleIsPublic",
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

describe("UserQuestion", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UserQuestionService,
          useValue: service,
        },
      ],
      controllers: [UserQuestionController],
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

  test("POST /userQuestions", async () => {
    await request(app.getHttpServer())
      .post("/userQuestions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        questionTime: CREATE_RESULT.questionTime.toISOString(),
      });
  });

  test("GET /userQuestions", async () => {
    await request(app.getHttpServer())
      .get("/userQuestions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          questionTime: FIND_MANY_RESULT[0].questionTime.toISOString(),
        },
      ]);
  });

  test("GET /userQuestions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userQuestions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /userQuestions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/userQuestions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        questionTime: FIND_ONE_RESULT.questionTime.toISOString(),
      });
  });

  test("POST /userQuestions existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/userQuestions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        questionTime: CREATE_RESULT.questionTime.toISOString(),
      })
      .then(function () {
        agent
          .post("/userQuestions")
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
