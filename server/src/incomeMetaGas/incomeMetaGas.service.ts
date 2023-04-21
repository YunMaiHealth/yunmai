import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IncomeMetaGasServiceBase } from "./base/incomeMetaGas.service.base";

@Injectable()
export class IncomeMetaGasService extends IncomeMetaGasServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
