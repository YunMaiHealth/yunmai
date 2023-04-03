import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ReplyQuestionResolverBase } from "./base/replyQuestion.resolver.base";
import { ReplyQuestion } from "./base/ReplyQuestion";
import { ReplyQuestionService } from "./replyQuestion.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ReplyQuestion)
export class ReplyQuestionResolver extends ReplyQuestionResolverBase {
  constructor(
    protected readonly service: ReplyQuestionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
