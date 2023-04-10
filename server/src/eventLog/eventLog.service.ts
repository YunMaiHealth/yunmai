import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EventLogServiceBase } from "./base/eventLog.service.base";

@Injectable()
export class EventLogService extends EventLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
