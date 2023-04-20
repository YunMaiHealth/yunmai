import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IncomeMataGasServiceBase } from "./base/incomeMataGas.service.base";

@Injectable()
export class IncomeMataGasService extends IncomeMataGasServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
