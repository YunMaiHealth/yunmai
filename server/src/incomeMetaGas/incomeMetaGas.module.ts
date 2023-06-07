import { Module } from "@nestjs/common";
import { IncomeMetaGasService } from "./incomeMetaGas.service";
import { IncomeMetaGasController } from "./incomeMetaGas.controller";
import { IncomeMetaGasResolver } from "./incomeMetaGas.resolver";

@Module({
  imports: [],
  controllers: [IncomeMetaGasController],
  providers: [IncomeMetaGasService, IncomeMetaGasResolver],
  exports: [IncomeMetaGasService, IncomeMetaGasResolver],
})
export class IncomeMetaGasModule {}
