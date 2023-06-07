import { Module } from "@nestjs/common";
import { HabitusModuleBase } from "./base/habitus.module.base";
import { HabitusService } from "./habitus.service";
import { HabitusController } from "./habitus.controller";
import { HabitusResolver } from "./habitus.resolver";
import { GatewatModule } from "../ws/ws.model";
import { StatusModule } from "../status/status.module";

@Module({
  imports: [HabitusModuleBase,GatewatModule,StatusModule],
  controllers: [HabitusController],
  providers: [HabitusService, HabitusResolver],
  exports: [HabitusService,HabitusResolver],
})
export class HabitusModule {}
