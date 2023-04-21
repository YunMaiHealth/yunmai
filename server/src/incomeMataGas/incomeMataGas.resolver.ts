import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IncomeMataGasResolverBase } from "./base/incomeMataGas.resolver.base";
import { IncomeMataGas } from "./base/IncomeMataGas";
import { IncomeMataGasService } from "./incomeMataGas.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IncomeMataGas)
export class IncomeMataGasResolver extends IncomeMataGasResolverBase {
  constructor(
    protected readonly service: IncomeMataGasService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
