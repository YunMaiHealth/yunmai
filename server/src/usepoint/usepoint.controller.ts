import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UsepointService } from "./usepoint.service";
import { UsepointControllerBase } from "./base/usepoint.controller.base";

@swagger.ApiTags("usepoints")
@common.Controller("usepoints")
export class UsepointController extends UsepointControllerBase {
  constructor(
    protected readonly service: UsepointService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
