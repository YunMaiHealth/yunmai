import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ReplyQuestionServiceBase } from "./base/replyQuestion.service.base";

@Injectable()
export class ReplyQuestionService extends ReplyQuestionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
