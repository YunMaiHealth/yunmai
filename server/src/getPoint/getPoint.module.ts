import { Module } from "@nestjs/common";
import { GetPointModuleBase } from "./base/getPoint.module.base";
import { GetPointService } from "./getPoint.service";
import { GetPointController } from "./getPoint.controller";
import { GetPointResolver } from "./getPoint.resolver";

@Module({
  imports: [GetPointModuleBase],
  controllers: [GetPointController],
  providers: [GetPointService, GetPointResolver],
  exports: [GetPointService],
})
export class GetPointModule {}
