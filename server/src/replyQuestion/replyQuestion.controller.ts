import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ReplyQuestionService } from "./replyQuestion.service";
import { ReplyQuestionControllerBase } from "./base/replyQuestion.controller.base";

@swagger.ApiTags("replyQuestions")
@common.Controller("replyQuestions")
export class ReplyQuestionController extends ReplyQuestionControllerBase {
  constructor(
    protected readonly service: ReplyQuestionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
