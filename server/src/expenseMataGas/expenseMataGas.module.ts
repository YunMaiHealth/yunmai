import { Module } from "@nestjs/common";
import { ExpenseMataGasModuleBase } from "./base/expenseMataGas.module.base";
import { ExpenseMataGasService } from "./expenseMataGas.service";
import { ExpenseMataGasController } from "./expenseMataGas.controller";
import { ExpenseMataGasResolver } from "./expenseMataGas.resolver";

@Module({
  imports: [ExpenseMataGasModuleBase],
  controllers: [ExpenseMataGasController],
  providers: [ExpenseMataGasService, ExpenseMataGasResolver],
  exports: [ExpenseMataGasService],
})
export class ExpenseMataGasModule {}
