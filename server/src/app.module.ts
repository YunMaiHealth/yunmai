import { Module, Scope } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { MorganInterceptor, MorganModule } from "nest-morgan";
import { UserModule } from "./user/user.module";
import { HabitusModule } from "./habitus/habitus.module";
import { StatusModule } from "./status/status.module";
import { IncomeMetaGasModule } from "./incomeMetaGas/incomeMetaGas.module";
import { ExpenseMetaGasModule } from "./expenseMetaGas/expenseMetaGas.module";
import { MessageModule } from "./message/message.module";
import { EventModule } from "./event/event.module";
import { InquiryModule } from "./inquiry/inquiry.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { GraphQLModule } from "@nestjs/graphql";
import { NftModule } from "./nft/nft.model";
import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";
import { RegisterModule } from "./register/register.model";

@Module({
  controllers: [],
  imports: [
    RegisterModule,
    ACLModule,
    AuthModule,
    UserModule,
    HabitusModule,
    StatusModule,
    IncomeMetaGasModule,
    ExpenseMetaGasModule,
    MessageModule,
    EventModule,
    InquiryModule,
    HealthModule,
    PrismaModule,
    NftModule,
    SecretsManagerModule,
    MorganModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      scope: Scope.REQUEST,
      useClass: MorganInterceptor("combined"),
    },
  ],
})
export class AppModule {}
