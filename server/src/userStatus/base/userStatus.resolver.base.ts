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
import { CreateUserStatusArgs } from "./CreateUserStatusArgs";
import { UpdateUserStatusArgs } from "./UpdateUserStatusArgs";
import { DeleteUserStatusArgs } from "./DeleteUserStatusArgs";
import { UserStatusFindManyArgs } from "./UserStatusFindManyArgs";
import { UserStatusFindUniqueArgs } from "./UserStatusFindUniqueArgs";
import { UserStatus } from "./UserStatus";
import { User } from "../../user/base/User";
import { UserStatusService } from "../userStatus.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserStatus)
export class UserStatusResolverBase {
  constructor(
    protected readonly service: UserStatusService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserStatus",
    action: "read",
    possession: "any",
  })
  async _userStatusesMeta(
    @graphql.Args() args: UserStatusFindManyArgs
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
  @graphql.Query(() => [UserStatus])
  @nestAccessControl.UseRoles({
    resource: "UserStatus",
    action: "read",
    possession: "any",
  })
  async userStatuses(
    @graphql.Args() args: UserStatusFindManyArgs
  ): Promise<UserStatus[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserStatus, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserStatus",
    action: "read",
    possession: "own",
  })
  async userStatus(
    @graphql.Args() args: UserStatusFindUniqueArgs
  ): Promise<UserStatus | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserStatus)
  @nestAccessControl.UseRoles({
    resource: "UserStatus",
    action: "create",
    possession: "any",
  })
  async createUserStatus(
    @graphql.Args() args: CreateUserStatusArgs
  ): Promise<UserStatus> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserStatus)
  @nestAccessControl.UseRoles({
    resource: "UserStatus",
    action: "update",
    possession: "any",
  })
  async updateUserStatus(
    @graphql.Args() args: UpdateUserStatusArgs
  ): Promise<UserStatus | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
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

  @graphql.Mutation(() => UserStatus)
  @nestAccessControl.UseRoles({
    resource: "UserStatus",
    action: "delete",
    possession: "any",
  })
  async deleteUserStatus(
    @graphql.Args() args: DeleteUserStatusArgs
  ): Promise<UserStatus | null> {
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
  async user(@graphql.Parent() parent: UserStatus): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}