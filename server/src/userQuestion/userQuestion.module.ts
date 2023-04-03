import { Module } from "@nestjs/common";
import { UserQuestionModuleBase } from "./base/userQuestion.module.base";
import { UserQuestionService } from "./userQuestion.service";
import { UserQuestionController } from "./userQuestion.controller";
import { UserQuestionResolver } from "./userQuestion.resolver";

@Module({
  imports: [UserQuestionModuleBase],
  controllers: [UserQuestionController],
  providers: [UserQuestionService, UserQuestionResolver],
  exports: [UserQuestionService],
})
export class UserQuestionModule {}
