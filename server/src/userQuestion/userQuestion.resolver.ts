import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserQuestionResolverBase } from "./base/userQuestion.resolver.base";
import { UserQuestion } from "./base/UserQuestion";
import { UserQuestionService } from "./userQuestion.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserQuestion)
export class UserQuestionResolver extends UserQuestionResolverBase {
  constructor(
    protected readonly service: UserQuestionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
