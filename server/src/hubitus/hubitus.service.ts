import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HubitusServiceBase } from "./base/hubitus.service.base";

@Injectable()
export class HubitusService extends HubitusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
