import { Module, forwardRef } from "@nestjs/common";
import { GatewatService } from "./ws.service";
import { WsStartGateway } from "./ws.gateway";
import { MessageModule } from "../message/message.module";
import { IncomeMetaGasModule } from "../incomeMetaGas/incomeMetaGas.module";
import { EventModule } from "../event/event.module";
import { UserModule } from "../user/user.module";
import { StatusModule } from "../status/status.module";


@Module({
    imports: [
      MessageModule,
      IncomeMetaGasModule,
      StatusModule,
      EventModule,
      UserModule],
    controllers: [],
    providers: [
      WsStartGateway,
      GatewatService,
    ],
    exports: [GatewatService],
  })
  export class GatewatModule {}
  