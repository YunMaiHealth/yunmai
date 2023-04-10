import { Module } from "@nestjs/common";
import { ReplyModuleBase } from "./base/reply.module.base";
import { ReplyService } from "./reply.service";
import { ReplyController } from "./reply.controller";
import { ReplyResolver } from "./reply.resolver";

@Module({
  imports: [ReplyModuleBase],
  controllers: [ReplyController],
  providers: [ReplyService, ReplyResolver],
  exports: [ReplyService],
})
export class ReplyModule {}
