import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MessageNotifyServiceBase } from "./base/messageNotify.service.base";

@Injectable()
export class MessageNotifyService extends MessageNotifyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
