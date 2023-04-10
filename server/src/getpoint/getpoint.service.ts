import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GetpointServiceBase } from "./base/getpoint.service.base";

@Injectable()
export class GetpointService extends GetpointServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
