import { Module } from "@nestjs/common";
import { IncomeMataGasModuleBase } from "./base/incomeMataGas.module.base";
import { IncomeMataGasService } from "./incomeMataGas.service";
import { IncomeMataGasController } from "./incomeMataGas.controller";
import { IncomeMataGasResolver } from "./incomeMataGas.resolver";

@Module({
  imports: [IncomeMataGasModuleBase],
  controllers: [IncomeMataGasController],
  providers: [IncomeMataGasService, IncomeMataGasResolver],
  exports: [IncomeMataGasService],
})
export class IncomeMataGasModule {}
