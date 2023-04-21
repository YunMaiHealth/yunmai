import { Module } from "@nestjs/common";
import { ExpenseMetaGasModuleBase } from "./base/expenseMetaGas.module.base";
import { ExpenseMetaGasService } from "./expenseMetaGas.service";
import { ExpenseMetaGasController } from "./expenseMetaGas.controller";
import { ExpenseMetaGasResolver } from "./expenseMetaGas.resolver";

@Module({
  imports: [ExpenseMetaGasModuleBase],
  controllers: [ExpenseMetaGasController],
  providers: [ExpenseMetaGasService, ExpenseMetaGasResolver],
  exports: [ExpenseMetaGasService],
})
export class ExpenseMetaGasModule {}
