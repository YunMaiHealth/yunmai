/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, IncomeMataGas, User } from "@prisma/client";

export class IncomeMataGasServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.IncomeMataGasFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncomeMataGasFindManyArgs>
  ): Promise<number> {
    return this.prisma.incomeMataGas.count(args);
  }

  async findMany<T extends Prisma.IncomeMataGasFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncomeMataGasFindManyArgs>
  ): Promise<IncomeMataGas[]> {
    return this.prisma.incomeMataGas.findMany(args);
  }
  async findOne<T extends Prisma.IncomeMataGasFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncomeMataGasFindUniqueArgs>
  ): Promise<IncomeMataGas | null> {
    return this.prisma.incomeMataGas.findUnique(args);
  }
  async create<T extends Prisma.IncomeMataGasCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncomeMataGasCreateArgs>
  ): Promise<IncomeMataGas> {
    return this.prisma.incomeMataGas.create<T>(args);
  }
  async update<T extends Prisma.IncomeMataGasUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncomeMataGasUpdateArgs>
  ): Promise<IncomeMataGas> {
    return this.prisma.incomeMataGas.update<T>(args);
  }
  async delete<T extends Prisma.IncomeMataGasDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.IncomeMataGasDeleteArgs>
  ): Promise<IncomeMataGas> {
    return this.prisma.incomeMataGas.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.incomeMataGas
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
