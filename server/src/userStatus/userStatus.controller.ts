import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UserStatusService } from "./userStatus.service";
import { UserStatusControllerBase } from "./base/userStatus.controller.base";

@swagger.ApiTags("userStatuses")
@common.Controller("userStatuses")
export class UserStatusController extends UserStatusControllerBase {
  constructor(
    protected readonly service: UserStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
