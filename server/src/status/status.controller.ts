import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StatusService } from "./status.service";
import { StatusControllerBase } from "./base/status.controller.base";

@swagger.ApiTags("statuses")
@common.Controller("statuses")
export class StatusController extends StatusControllerBase {
  constructor(
    protected readonly service: StatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
