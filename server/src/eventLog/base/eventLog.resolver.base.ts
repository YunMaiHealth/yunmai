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
import { CreateEventLogArgs } from "./CreateEventLogArgs";
import { UpdateEventLogArgs } from "./UpdateEventLogArgs";
import { DeleteEventLogArgs } from "./DeleteEventLogArgs";
import { EventLogFindManyArgs } from "./EventLogFindManyArgs";
import { EventLogFindUniqueArgs } from "./EventLogFindUniqueArgs";
import { EventLog } from "./EventLog";
import { MessageNotifyFindManyArgs } from "../../messageNotify/base/MessageNotifyFindManyArgs";
import { MessageNotify } from "../../messageNotify/base/MessageNotify";
import { EventLogService } from "../eventLog.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EventLog)
export class EventLogResolverBase {
  constructor(
    protected readonly service: EventLogService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "EventLog",
    action: "read",
    possession: "any",
  })
  async _eventLogsMeta(
    @graphql.Args() args: EventLogFindManyArgs
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
  @graphql.Query(() => [EventLog])
  @nestAccessControl.UseRoles({
    resource: "EventLog",
    action: "read",
    possession: "any",
  })
  async eventLogs(
    @graphql.Args() args: EventLogFindManyArgs
  ): Promise<EventLog[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => EventLog, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "EventLog",
    action: "read",
    possession: "own",
  })
  async eventLog(
    @graphql.Args() args: EventLogFindUniqueArgs
  ): Promise<EventLog | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => EventLog)
  @nestAccessControl.UseRoles({
    resource: "EventLog",
    action: "create",
    possession: "any",
  })
  async createEventLog(
    @graphql.Args() args: CreateEventLogArgs
  ): Promise<EventLog> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => EventLog)
  @nestAccessControl.UseRoles({
    resource: "EventLog",
    action: "update",
    possession: "any",
  })
  async updateEventLog(
    @graphql.Args() args: UpdateEventLogArgs
  ): Promise<EventLog | null> {
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

  @graphql.Mutation(() => EventLog)
  @nestAccessControl.UseRoles({
    resource: "EventLog",
    action: "delete",
    possession: "any",
  })
  async deleteEventLog(
    @graphql.Args() args: DeleteEventLogArgs
  ): Promise<EventLog | null> {
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
  @graphql.ResolveField(() => [MessageNotify])
  @nestAccessControl.UseRoles({
    resource: "MessageNotify",
    action: "read",
    possession: "any",
  })
  async messageNotifies(
    @graphql.Parent() parent: EventLog,
    @graphql.Args() args: MessageNotifyFindManyArgs
  ): Promise<MessageNotify[]> {
    const results = await this.service.findMessageNotifies(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
