import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HubitusCheckupServiceBase } from "./base/hubitusCheckup.service.base";

@Injectable()
export class HubitusCheckupService extends HubitusCheckupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
