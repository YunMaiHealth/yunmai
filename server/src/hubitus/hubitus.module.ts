import { Module } from "@nestjs/common";
import { HubitusModuleBase } from "./base/hubitus.module.base";
import { HubitusService } from "./hubitus.service";
import { HubitusController } from "./hubitus.controller";
import { HubitusResolver } from "./hubitus.resolver";

@Module({
  imports: [HubitusModuleBase],
  controllers: [HubitusController],
  providers: [HubitusService, HubitusResolver],
  exports: [HubitusService],
})
export class HubitusModule {}
