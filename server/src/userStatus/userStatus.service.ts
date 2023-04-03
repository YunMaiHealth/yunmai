import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserStatusServiceBase } from "./base/userStatus.service.base";

@Injectable()
export class UserStatusService extends UserStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
