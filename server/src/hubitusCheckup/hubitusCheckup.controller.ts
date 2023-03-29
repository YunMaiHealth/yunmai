import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HubitusCheckupService } from "./hubitusCheckup.service";
import { HubitusCheckupControllerBase } from "./base/hubitusCheckup.controller.base";

@swagger.ApiTags("hubitusCheckups")
@common.Controller("hubitusCheckups")
export class HubitusCheckupController extends HubitusCheckupControllerBase {
  constructor(
    protected readonly service: HubitusCheckupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
