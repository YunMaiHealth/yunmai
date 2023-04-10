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
import { CreateUserArgs } from "./CreateUserArgs";
import { UpdateUserArgs } from "./UpdateUserArgs";
import { DeleteUserArgs } from "./DeleteUserArgs";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserFindUniqueArgs } from "./UserFindUniqueArgs";
import { User } from "./User";
import { HubitusFindManyArgs } from "../../hubitus/base/HubitusFindManyArgs";
import { Hubitus } from "../../hubitus/base/Hubitus";
import { StatusFindManyArgs } from "../../status/base/StatusFindManyArgs";
import { Status } from "../../status/base/Status";
import { MessageFindManyArgs } from "../../message/base/MessageFindManyArgs";
import { Message } from "../../message/base/Message";
import { UsepointFindManyArgs } from "../../usepoint/base/UsepointFindManyArgs";
import { Usepoint } from "../../usepoint/base/Usepoint";
import { GetpointFindManyArgs } from "../../getpoint/base/GetpointFindManyArgs";
import { Getpoint } from "../../getpoint/base/Getpoint";
import { UserService } from "../user.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => User)
export class UserResolverBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async _usersMeta(
    @graphql.Args() args: UserFindManyArgs
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
  @graphql.Query(() => [User])
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async users(@graphql.Args() args: UserFindManyArgs): Promise<User[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  async user(@graphql.Args() args: UserFindUniqueArgs): Promise<User | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  async createUser(@graphql.Args() args: CreateUserArgs): Promise<User> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateUser(@graphql.Args() args: UpdateUserArgs): Promise<User | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => User)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  async deleteUser(@graphql.Args() args: DeleteUserArgs): Promise<User | null> {
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
  @graphql.ResolveField(() => [Hubitus])
  @nestAccessControl.UseRoles({
    resource: "Hubitus",
    action: "read",
    possession: "any",
  })
  async hubituses(
    @graphql.Parent() parent: User,
    @graphql.Args() args: HubitusFindManyArgs
  ): Promise<Hubitus[]> {
    const results = await this.service.findHubituses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Status])
  @nestAccessControl.UseRoles({
    resource: "Status",
    action: "read",
    possession: "any",
  })
  async statuses(
    @graphql.Parent() parent: User,
    @graphql.Args() args: StatusFindManyArgs
  ): Promise<Status[]> {
    const results = await this.service.findStatuses(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Message])
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "read",
    possession: "any",
  })
  async messages(
    @graphql.Parent() parent: User,
    @graphql.Args() args: MessageFindManyArgs
  ): Promise<Message[]> {
    const results = await this.service.findMessages(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Usepoint])
  @nestAccessControl.UseRoles({
    resource: "Usepoint",
    action: "read",
    possession: "any",
  })
  async usepoints(
    @graphql.Parent() parent: User,
    @graphql.Args() args: UsepointFindManyArgs
  ): Promise<Usepoint[]> {
    const results = await this.service.findUsepoints(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Getpoint])
  @nestAccessControl.UseRoles({
    resource: "Getpoint",
    action: "read",
    possession: "any",
  })
  async getpoints(
    @graphql.Parent() parent: User,
    @graphql.Args() args: GetpointFindManyArgs
  ): Promise<Getpoint[]> {
    const results = await this.service.findGetpoints(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
