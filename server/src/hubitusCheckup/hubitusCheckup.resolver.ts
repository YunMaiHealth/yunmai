import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HubitusCheckupResolverBase } from "./base/hubitusCheckup.resolver.base";
import { HubitusCheckup } from "./base/HubitusCheckup";
import { HubitusCheckupService } from "./hubitusCheckup.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HubitusCheckup)
export class HubitusCheckupResolver extends HubitusCheckupResolverBase {
  constructor(
    protected readonly service: HubitusCheckupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
