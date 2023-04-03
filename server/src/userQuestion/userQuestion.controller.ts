import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserQuestionService } from "./userQuestion.service";
import { UserQuestionControllerBase } from "./base/userQuestion.controller.base";

@swagger.ApiTags("userQuestions")
@common.Controller("userQuestions")
export class UserQuestionController extends UserQuestionControllerBase {
  constructor(
    protected readonly service: UserQuestionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
