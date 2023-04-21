import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HabitusService } from "./habitus.service";
import { HabitusControllerBase } from "./base/habitus.controller.base";

@swagger.ApiTags("habituses")
@common.Controller("habituses")
export class HabitusController extends HabitusControllerBase {
  constructor(
    protected readonly service: HabitusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
