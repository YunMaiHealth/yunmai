/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ReplyQuestion, User, UserQuestion } from "@prisma/client";

export class ReplyQuestionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ReplyQuestionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReplyQuestionFindManyArgs>
  ): Promise<number> {
    return this.prisma.replyQuestion.count(args);
  }

  async findMany<T extends Prisma.ReplyQuestionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReplyQuestionFindManyArgs>
  ): Promise<ReplyQuestion[]> {
    return this.prisma.replyQuestion.findMany(args);
  }
  async findOne<T extends Prisma.ReplyQuestionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReplyQuestionFindUniqueArgs>
  ): Promise<ReplyQuestion | null> {
    return this.prisma.replyQuestion.findUnique(args);
  }
  async create<T extends Prisma.ReplyQuestionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReplyQuestionCreateArgs>
  ): Promise<ReplyQuestion> {
    return this.prisma.replyQuestion.create<T>(args);
  }
  async update<T extends Prisma.ReplyQuestionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReplyQuestionUpdateArgs>
  ): Promise<ReplyQuestion> {
    return this.prisma.replyQuestion.update<T>(args);
  }
  async delete<T extends Prisma.ReplyQuestionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ReplyQuestionDeleteArgs>
  ): Promise<ReplyQuestion> {
    return this.prisma.replyQuestion.delete(args);
  }

  async getReplyUser(parentId: string): Promise<User | null> {
    return this.prisma.replyQuestion
      .findUnique({
        where: { id: parentId },
      })
      .replyUser();
  }

  async getUserQuestion(parentId: string): Promise<UserQuestion | null> {
    return this.prisma.replyQuestion
      .findUnique({
        where: { id: parentId },
      })
      .userQuestion();
  }
}
