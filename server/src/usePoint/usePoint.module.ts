import { Module } from "@nestjs/common";
import { UsePointModuleBase } from "./base/usePoint.module.base";
import { UsePointService } from "./usePoint.service";
import { UsePointController } from "./usePoint.controller";
import { UsePointResolver } from "./usePoint.resolver";

@Module({
  imports: [UsePointModuleBase],
  controllers: [UsePointController],
  providers: [UsePointService, UsePointResolver],
  exports: [UsePointService],
})
export class UsePointModule {}
