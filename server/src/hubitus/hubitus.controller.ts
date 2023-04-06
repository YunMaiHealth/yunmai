import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HubitusService } from "./hubitus.service";
import { HubitusControllerBase } from "./base/hubitus.controller.base";

@swagger.ApiTags("hubituses")
@common.Controller("hubituses")
export class HubitusController extends HubitusControllerBase {
  constructor(
    protected readonly service: HubitusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
