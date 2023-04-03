import { Module } from "@nestjs/common";
import { UserStatusModuleBase } from "./base/userStatus.module.base";
import { UserStatusService } from "./userStatus.service";
import { UserStatusController } from "./userStatus.controller";
import { UserStatusResolver } from "./userStatus.resolver";

@Module({
  imports: [UserStatusModuleBase],
  controllers: [UserStatusController],
  providers: [UserStatusService, UserStatusResolver],
  exports: [UserStatusService],
})
export class UserStatusModule {}
