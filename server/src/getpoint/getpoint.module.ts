import { Module } from "@nestjs/common";
import { GetpointModuleBase } from "./base/getpoint.module.base";
import { GetpointService } from "./getpoint.service";
import { GetpointController } from "./getpoint.controller";
import { GetpointResolver } from "./getpoint.resolver";

@Module({
  imports: [GetpointModuleBase],
  controllers: [GetpointController],
  providers: [GetpointService, GetpointResolver],
  exports: [GetpointService],
})
export class GetpointModule {}
