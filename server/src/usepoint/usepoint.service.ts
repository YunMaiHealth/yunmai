import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsepointServiceBase } from "./base/usepoint.service.base";

@Injectable()
export class UsepointService extends UsepointServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
