import { Module } from "@nestjs/common";
import { IncomeMetaGasModuleBase } from "./base/incomeMetaGas.module.base";
import { IncomeMetaGasService } from "./incomeMetaGas.service";
import { IncomeMetaGasController } from "./incomeMetaGas.controller";
import { IncomeMetaGasResolver } from "./incomeMetaGas.resolver";

@Module({
  imports: [IncomeMetaGasModuleBase],
  controllers: [IncomeMetaGasController],
  providers: [IncomeMetaGasService, IncomeMetaGasResolver],
  exports: [IncomeMetaGasService],
})
export class IncomeMetaGasModule {}
