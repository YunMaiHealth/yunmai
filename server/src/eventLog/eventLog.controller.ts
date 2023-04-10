import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EventLogService } from "./eventLog.service";
import { EventLogControllerBase } from "./base/eventLog.controller.base";

@swagger.ApiTags("eventLogs")
@common.Controller("eventLogs")
export class EventLogController extends EventLogControllerBase {
  constructor(
    protected readonly service: EventLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
