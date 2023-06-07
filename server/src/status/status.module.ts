import { Module, forwardRef } from "@nestjs/common";
import { StatusModuleBase } from "./base/status.module.base";
import { StatusService } from "./status.service";
import { StatusController } from "./status.controller";
import { StatusResolver } from "./status.resolver";
import { UserModule } from "../user/user.module";
import { GatewatModule } from "../ws/ws.model";


@Module({
  imports: [StatusModuleBase,UserModule,forwardRef(() =>GatewatModule)],
  controllers: [StatusController],
  providers: [StatusService, StatusResolver],
  exports: [StatusService, StatusResolver],
})
export class StatusModule {}
