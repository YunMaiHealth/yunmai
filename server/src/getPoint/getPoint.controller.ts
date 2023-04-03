import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GetPointService } from "./getPoint.service";
import { GetPointControllerBase } from "./base/getPoint.controller.base";

@swagger.ApiTags("getPoints")
@common.Controller("getPoints")
export class GetPointController extends GetPointControllerBase {
  constructor(
    protected readonly service: GetPointService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
