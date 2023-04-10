import { Module } from "@nestjs/common";
import { UsepointModuleBase } from "./base/usepoint.module.base";
import { UsepointService } from "./usepoint.service";
import { UsepointController } from "./usepoint.controller";
import { UsepointResolver } from "./usepoint.resolver";

@Module({
  imports: [UsepointModuleBase],
  controllers: [UsepointController],
  providers: [UsepointService, UsepointResolver],
  exports: [UsepointService],
})
export class UsepointModule {}
