import { Module } from "@nestjs/common";
import { EventLogModuleBase } from "./base/eventLog.module.base";
import { EventLogService } from "./eventLog.service";
import { EventLogController } from "./eventLog.controller";
import { EventLogResolver } from "./eventLog.resolver";

@Module({
  imports: [EventLogModuleBase],
  controllers: [EventLogController],
  providers: [EventLogService, EventLogResolver],
  exports: [EventLogService],
})
export class EventLogModule {}
