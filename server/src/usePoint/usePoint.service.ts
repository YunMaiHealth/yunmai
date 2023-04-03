import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UsePointServiceBase } from "./base/usePoint.service.base";

@Injectable()
export class UsePointService extends UsePointServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
