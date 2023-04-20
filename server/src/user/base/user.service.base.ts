/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  User,
  Hubitus,
  Status,
  IncomeMataGas,
  Message,
  ExpenseMataGas,
  Inquiry,
} from "@prisma/client";

import { PasswordService } from "../../auth/password.service";
import { transformStringFieldUpdateInput } from "../../prisma.util";

export class UserServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {}

  async count<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<number> {
    return this.prisma.user.count(args);
  }

  async findMany<T extends Prisma.UserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>
  ): Promise<User[]> {
    return this.prisma.user.findMany(args);
  }
  async findOne<T extends Prisma.UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserFindUniqueArgs>
  ): Promise<User | null> {
    return this.prisma.user.findUnique(args);
  }
  async create<T extends Prisma.UserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserCreateArgs>
  ): Promise<User> {
    return this.prisma.user.create<T>({
      ...args,

      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });
  }
  async update<T extends Prisma.UserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>
  ): Promise<User> {
    return this.prisma.user.update<T>({
      ...args,

      data: {
        ...args.data,

        password:
          args.data.password &&
          (await transformStringFieldUpdateInput(
            args.data.password,
            (password) => this.passwordService.hash(password)
          )),
      },
    });
  }
  async delete<T extends Prisma.UserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.UserDeleteArgs>
  ): Promise<User> {
    return this.prisma.user.delete(args);
  }

  async findHubituses(
    parentId: string,
    args: Prisma.HubitusFindManyArgs
  ): Promise<Hubitus[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .hubituses(args);
  }

  async findStatuses(
    parentId: string,
    args: Prisma.StatusFindManyArgs
  ): Promise<Status[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .statuses(args);
  }

  async findIncomeMataGases(
    parentId: string,
    args: Prisma.IncomeMataGasFindManyArgs
  ): Promise<IncomeMataGas[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .incomeMataGases(args);
  }

  async findMessages(
    parentId: string,
    args: Prisma.MessageFindManyArgs
  ): Promise<Message[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .messages(args);
  }

  async findExpenseMataGases(
    parentId: string,
    args: Prisma.ExpenseMataGasFindManyArgs
  ): Promise<ExpenseMataGas[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .expenseMataGases(args);
  }

  async findInquirys(
    parentId: string,
    args: Prisma.InquiryFindManyArgs
  ): Promise<Inquiry[]> {
    return this.prisma.user
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .inquirys(args);
  }
}
