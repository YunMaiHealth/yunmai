/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, MessageNotify, User, EventLog } from "@prisma/client";

export class MessageNotifyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.MessageNotifyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageNotifyFindManyArgs>
  ): Promise<number> {
    return this.prisma.messageNotify.count(args);
  }

  async findMany<T extends Prisma.MessageNotifyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageNotifyFindManyArgs>
  ): Promise<MessageNotify[]> {
    return this.prisma.messageNotify.findMany(args);
  }
  async findOne<T extends Prisma.MessageNotifyFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageNotifyFindUniqueArgs>
  ): Promise<MessageNotify | null> {
    return this.prisma.messageNotify.findUnique(args);
  }
  async create<T extends Prisma.MessageNotifyCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageNotifyCreateArgs>
  ): Promise<MessageNotify> {
    return this.prisma.messageNotify.create<T>(args);
  }
  async update<T extends Prisma.MessageNotifyUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageNotifyUpdateArgs>
  ): Promise<MessageNotify> {
    return this.prisma.messageNotify.update<T>(args);
  }
  async delete<T extends Prisma.MessageNotifyDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MessageNotifyDeleteArgs>
  ): Promise<MessageNotify> {
    return this.prisma.messageNotify.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.messageNotify
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }

  async getEventLog(parentId: string): Promise<EventLog | null> {
    return this.prisma.messageNotify
      .findUnique({
        where: { id: parentId },
      })
      .eventLog();
  }
}
