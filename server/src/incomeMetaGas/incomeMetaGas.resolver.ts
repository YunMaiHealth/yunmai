import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { IncomeMetaGasResolverBase } from "./base/incomeMetaGas.resolver.base";
import { IncomeMetaGas } from "./base/IncomeMetaGas";
import { IncomeMetaGasService } from "./incomeMetaGas.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => IncomeMetaGas)
export class IncomeMetaGasResolver extends IncomeMetaGasResolverBase {
  constructor(
    protected readonly service: IncomeMetaGasService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
