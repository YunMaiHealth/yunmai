import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ExpenseMetaGasResolverBase } from "./base/expenseMetaGas.resolver.base";
import { ExpenseMetaGas } from "./base/ExpenseMetaGas";
import { ExpenseMetaGasService } from "./expenseMetaGas.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ExpenseMetaGas)
export class ExpenseMetaGasResolver extends ExpenseMetaGasResolverBase {
  constructor(
    protected readonly service: ExpenseMetaGasService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
