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
import { IncomeMetaGasController } from "../incomeMetaGas.controller";
import { IncomeMetaGasService } from "../incomeMetaGas.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  income_date: new Date(),
  amount: 42,
  category: "exampleCategory",
};
const CREATE_RESULT = {
  id: "exampleId",
  income_date: new Date(),
  amount: 42,
  category: "exampleCategory",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    income_date: new Date(),
    amount: 42,
    category: "exampleCategory",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  income_date: new Date(),
  amount: 42,
  category: "exampleCategory",
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

describe("IncomeMetaGas", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: IncomeMetaGasService,
          useValue: service,
        },
      ],
      controllers: [IncomeMetaGasController],
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

  test("POST /incomeMetaGases", async () => {
    await request(app.getHttpServer())
      .post("/incomeMetaGases")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        income_date: CREATE_RESULT.income_date.toISOString(),
      });
  });

  test("GET /incomeMetaGases", async () => {
    await request(app.getHttpServer())
      .get("/incomeMetaGases")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          income_date: FIND_MANY_RESULT[0].income_date.toISOString(),
        },
      ]);
  });

  test("GET /incomeMetaGases/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/incomeMetaGases"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /incomeMetaGases/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/incomeMetaGases"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        income_date: FIND_ONE_RESULT.income_date.toISOString(),
      });
  });

  test("POST /incomeMetaGases existing resource", async () => {
    let agent = request(app.getHttpServer());
    await agent
      .post("/incomeMetaGases")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        income_date: CREATE_RESULT.income_date.toISOString(),
      })
      .then(function () {
        agent
          .post("/incomeMetaGases")
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
