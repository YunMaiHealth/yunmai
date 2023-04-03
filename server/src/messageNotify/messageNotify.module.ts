import { Module } from "@nestjs/common";
import { MessageNotifyModuleBase } from "./base/messageNotify.module.base";
import { MessageNotifyService } from "./messageNotify.service";
import { MessageNotifyController } from "./messageNotify.controller";
import { MessageNotifyResolver } from "./messageNotify.resolver";

@Module({
  imports: [MessageNotifyModuleBase],
  controllers: [MessageNotifyController],
  providers: [MessageNotifyService, MessageNotifyResolver],
  exports: [MessageNotifyService],
})
export class MessageNotifyModule {}
