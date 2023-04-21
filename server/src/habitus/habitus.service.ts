import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HabitusServiceBase } from "./base/habitus.service.base";

@Injectable()
export class HabitusService extends HabitusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
