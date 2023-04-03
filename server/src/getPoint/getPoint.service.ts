import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GetPointServiceBase } from "./base/getPoint.service.base";

@Injectable()
export class GetPointService extends GetPointServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
