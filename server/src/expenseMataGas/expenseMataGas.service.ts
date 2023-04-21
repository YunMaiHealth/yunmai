import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExpenseMataGasServiceBase } from "./base/expenseMataGas.service.base";

@Injectable()
export class ExpenseMataGasService extends ExpenseMataGasServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
