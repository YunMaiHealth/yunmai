import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GetpointService } from "./getpoint.service";
import { GetpointControllerBase } from "./base/getpoint.controller.base";

@swagger.ApiTags("getpoints")
@common.Controller("getpoints")
export class GetpointController extends GetpointControllerBase {
  constructor(
    protected readonly service: GetpointService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
