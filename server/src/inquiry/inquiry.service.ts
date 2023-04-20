import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InquiryServiceBase } from "./base/inquiry.service.base";

@Injectable()
export class InquiryService extends InquiryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
