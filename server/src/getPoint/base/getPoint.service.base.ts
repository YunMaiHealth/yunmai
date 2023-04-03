/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, GetPoint, User } from "@prisma/client";

export class GetPointServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.GetPointFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GetPointFindManyArgs>
  ): Promise<number> {
    return this.prisma.getPoint.count(args);
  }

  async findMany<T extends Prisma.GetPointFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GetPointFindManyArgs>
  ): Promise<GetPoint[]> {
    return this.prisma.getPoint.findMany(args);
  }
  async findOne<T extends Prisma.GetPointFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GetPointFindUniqueArgs>
  ): Promise<GetPoint | null> {
    return this.prisma.getPoint.findUnique(args);
  }
  async create<T extends Prisma.GetPointCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GetPointCreateArgs>
  ): Promise<GetPoint> {
    return this.prisma.getPoint.create<T>(args);
  }
  async update<T extends Prisma.GetPointUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GetPointUpdateArgs>
  ): Promise<GetPoint> {
    return this.prisma.getPoint.update<T>(args);
  }
  async delete<T extends Prisma.GetPointDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GetPointDeleteArgs>
  ): Promise<GetPoint> {
    return this.prisma.getPoint.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.getPoint
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
