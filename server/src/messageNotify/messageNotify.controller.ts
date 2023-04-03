import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MessageNotifyService } from "./messageNotify.service";
import { MessageNotifyControllerBase } from "./base/messageNotify.controller.base";

@swagger.ApiTags("messageNotifies")
@common.Controller("messageNotifies")
export class MessageNotifyController extends MessageNotifyControllerBase {
  constructor(
    protected readonly service: MessageNotifyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
