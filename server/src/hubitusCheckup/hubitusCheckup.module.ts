import { Module } from "@nestjs/common";
import { HubitusCheckupModuleBase } from "./base/hubitusCheckup.module.base";
import { HubitusCheckupService } from "./hubitusCheckup.service";
import { HubitusCheckupController } from "./hubitusCheckup.controller";
import { HubitusCheckupResolver } from "./hubitusCheckup.resolver";

@Module({
  imports: [HubitusCheckupModuleBase],
  controllers: [HubitusCheckupController],
  providers: [HubitusCheckupService, HubitusCheckupResolver],
  exports: [HubitusCheckupService],
})
export class HubitusCheckupModule {}
