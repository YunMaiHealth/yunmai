import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserQuestionServiceBase } from "./base/userQuestion.service.base";

@Injectable()
export class UserQuestionService extends UserQuestionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
