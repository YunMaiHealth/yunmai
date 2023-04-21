import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExpenseMetaGasServiceBase } from "./base/expenseMetaGas.service.base";

@Injectable()
export class ExpenseMetaGasService extends ExpenseMetaGasServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
