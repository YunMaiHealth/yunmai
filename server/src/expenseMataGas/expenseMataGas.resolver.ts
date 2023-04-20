import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ExpenseMataGasResolverBase } from "./base/expenseMataGas.resolver.base";
import { ExpenseMataGas } from "./base/ExpenseMataGas";
import { ExpenseMataGasService } from "./expenseMataGas.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExpenseMataGas)
export class ExpenseMataGasResolver extends ExpenseMataGasResolverBase {
  constructor(
    protected readonly service: ExpenseMataGasService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
