/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateHubitusArgs } from "./CreateHubitusArgs";
import { UpdateHubitusArgs } from "./UpdateHubitusArgs";
import { DeleteHubitusArgs } from "./DeleteHubitusArgs";
import { HubitusFindManyArgs } from "./HubitusFindManyArgs";
import { HubitusFindUniqueArgs } from "./HubitusFindUniqueArgs";
import { Hubitus } from "./Hubitus";
import { User } from "../../user/base/User";
import { HubitusService } from "../hubitus.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Hubitus)
export class HubitusResolverBase {
  constructor(
    protected readonly service: HubitusService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Hubitus",
    action: "read",
    possession: "any",
  })
  async _hubitusesMeta(
    @graphql.Args() args: HubitusFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Hubitus])
  @nestAccessControl.UseRoles({
    resource: "Hubitus",
    action: "read",
    possession: "any",
  })
  async hubituses(
    @graphql.Args() args: HubitusFindManyArgs
  ): Promise<Hubitus[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Hubitus, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Hubitus",
    action: "read",
    possession: "own",
  })
  async hubitus(
    @graphql.Args() args: HubitusFindUniqueArgs
  ): Promise<Hubitus | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Hubitus)
  @nestAccessControl.UseRoles({
    resource: "Hubitus",
    action: "create",
    possession: "any",
  })
  async createHubitus(
    @graphql.Args() args: CreateHubitusArgs
  ): Promise<Hubitus> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        user: {
          connect: args.data.user,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Hubitus)
  @nestAccessControl.UseRoles({
    resource: "Hubitus",
    action: "update",
    possession: "any",
  })
  async updateHubitus(
    @graphql.Args() args: UpdateHubitusArgs
  ): Promise<Hubitus | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          user: {
            connect: args.data.user,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Hubitus)
  @nestAccessControl.UseRoles({
    resource: "Hubitus",
    action: "delete",
    possession: "any",
  })
  async deleteHubitus(
    @graphql.Args() args: DeleteHubitusArgs
  ): Promise<Hubitus | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async user(@graphql.Parent() parent: Hubitus): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}