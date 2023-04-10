/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { EventLogService } from "../eventLog.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { EventLogCreateInput } from "./EventLogCreateInput";
import { EventLogWhereInput } from "./EventLogWhereInput";
import { EventLogWhereUniqueInput } from "./EventLogWhereUniqueInput";
import { EventLogFindManyArgs } from "./EventLogFindManyArgs";
import { EventLogUpdateInput } from "./EventLogUpdateInput";
import { EventLog } from "./EventLog";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class EventLogControllerBase {
  constructor(
    protected readonly service: EventLogService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EventLog })
  @nestAccessControl.UseRoles({
    resource: "EventLog",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: EventLogCreateInput): Promise<EventLog> {
    return await this.service.create({
      data: {
        ...data,

        messageNotifies: data.messageNotifies
          ? {
              connect: data.messageNotifies,
            }
          : undefined,
      },
      select: {
        id: true,
        eventTime: true,

        messageNotifies: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [EventLog] })
  @ApiNestedQuery(EventLogFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "EventLog",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<EventLog[]> {
    const args = plainToClass(EventLogFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        id: true,
        eventTime: true,

        messageNotifies: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EventLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EventLog",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: EventLogWhereUniqueInput
  ): Promise<EventLog | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        id: true,
        eventTime: true,

        messageNotifies: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: EventLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EventLog",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: EventLogWhereUniqueInput,
    @common.Body() data: EventLogUpdateInput
  ): Promise<EventLog | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          messageNotifies: data.messageNotifies
            ? {
                connect: data.messageNotifies,
              }
            : undefined,
        },
        select: {
          id: true,
          eventTime: true,

          messageNotifies: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: EventLog })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "EventLog",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: EventLogWhereUniqueInput
  ): Promise<EventLog | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          id: true,
          eventTime: true,

          messageNotifies: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
