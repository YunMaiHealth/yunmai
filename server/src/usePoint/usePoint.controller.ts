import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UsePointService } from "./usePoint.service";
import { UsePointControllerBase } from "./base/usePoint.controller.base";

@swagger.ApiTags("usePoints")
@common.Controller("usePoints")
export class UsePointController extends UsePointControllerBase {
  constructor(
    protected readonly service: UsePointService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
