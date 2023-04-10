import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { StatusResolverBase } from "./base/status.resolver.base";
import { Status } from "./base/Status";
import { StatusService } from "./status.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Status)
export class StatusResolver extends StatusResolverBase {
  constructor(
    protected readonly service: StatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
