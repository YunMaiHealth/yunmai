import { Module } from "@nestjs/common";
import { HabitusModuleBase } from "./base/habitus.module.base";
import { HabitusService } from "./habitus.service";
import { HabitusController } from "./habitus.controller";
import { HabitusResolver } from "./habitus.resolver";

@Module({
  imports: [HabitusModuleBase],
  controllers: [HabitusController],
  providers: [HabitusService, HabitusResolver],
  exports: [HabitusService],
})
export class HabitusModule {}
