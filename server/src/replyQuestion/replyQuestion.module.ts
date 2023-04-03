import { Module } from "@nestjs/common";
import { ReplyQuestionModuleBase } from "./base/replyQuestion.module.base";
import { ReplyQuestionService } from "./replyQuestion.service";
import { ReplyQuestionController } from "./replyQuestion.controller";
import { ReplyQuestionResolver } from "./replyQuestion.resolver";

@Module({
  imports: [ReplyQuestionModuleBase],
  controllers: [ReplyQuestionController],
  providers: [ReplyQuestionService, ReplyQuestionResolver],
  exports: [ReplyQuestionService],
})
export class ReplyQuestionModule {}
