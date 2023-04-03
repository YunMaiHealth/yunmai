import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MessageNotifyResolverBase } from "./base/messageNotify.resolver.base";
import { MessageNotify } from "./base/MessageNotify";
import { MessageNotifyService } from "./messageNotify.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MessageNotify)
export class MessageNotifyResolver extends MessageNotifyResolverBase {
  constructor(
    protected readonly service: MessageNotifyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
