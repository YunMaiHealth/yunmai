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
import { UserService } from "../user.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UserCreateInput } from "./UserCreateInput";
import { UserWhereInput } from "./UserWhereInput";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserUpdateInput } from "./UserUpdateInput";
import { User } from "./User";
import { HabitusFindManyArgs } from "../../habitus/base/HabitusFindManyArgs";
import { Habitus } from "../../habitus/base/Habitus";
import { HabitusWhereUniqueInput } from "../../habitus/base/HabitusWhereUniqueInput";
import { StatusFindManyArgs } from "../../status/base/StatusFindManyArgs";
import { Status } from "../../status/base/Status";
import { StatusWhereUniqueInput } from "../../status/base/StatusWhereUniqueInput";
import { IncomeMetaGasFindManyArgs } from "../../incomeMetaGas/base/IncomeMetaGasFindManyArgs";
import { IncomeMetaGas } from "../../incomeMetaGas/base/IncomeMetaGas";
import { IncomeMetaGasWhereUniqueInput } from "../../incomeMetaGas/base/IncomeMetaGasWhereUniqueInput";
import { MessageFindManyArgs } from "../../message/base/MessageFindManyArgs";
import { Message } from "../../message/base/Message";
import { MessageWhereUniqueInput } from "../../message/base/MessageWhereUniqueInput";
import { ExpenseMetaGasFindManyArgs } from "../../expenseMetaGas/base/ExpenseMetaGasFindManyArgs";
import { ExpenseMetaGas } from "../../expenseMetaGas/base/ExpenseMetaGas";
import { ExpenseMetaGasWhereUniqueInput } from "../../expenseMetaGas/base/ExpenseMetaGasWhereUniqueInput";
import { InquiryFindManyArgs } from "../../inquiry/base/InquiryFindManyArgs";
import { Inquiry } from "../../inquiry/base/Inquiry";
import { InquiryWhereUniqueInput } from "../../inquiry/base/InquiryWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UserControllerBase {
  constructor(
    protected readonly service: UserService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.create({
      data: data,
      select: {
        oauthType: true,
        nickName: true,
        sessionKey: true,
        inviterId: true,
        phone: true,
        gender: true,
        openId: true,
        avatarUrl: true,
        unionId: true,
        birthday: true,
        identitycard: true,
        country: true,
        language: true,
        province: true,
        city: true,
        id: true,
        realName: true,
        username: true,
        roles: true,
        creatTime: true,
        lastLoginTime: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        oauthType: true,
        nickName: true,
        sessionKey: true,
        inviterId: true,
        phone: true,
        gender: true,
        openId: true,
        avatarUrl: true,
        unionId: true,
        birthday: true,
        identitycard: true,
        country: true,
        language: true,
        province: true,
        city: true,
        id: true,
        realName: true,
        username: true,
        roles: true,
        creatTime: true,
        lastLoginTime: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        oauthType: true,
        nickName: true,
        sessionKey: true,
        inviterId: true,
        phone: true,
        gender: true,
        openId: true,
        avatarUrl: true,
        unionId: true,
        birthday: true,
        identitycard: true,
        country: true,
        language: true,
        province: true,
        city: true,
        id: true,
        realName: true,
        username: true,
        roles: true,
        creatTime: true,
        lastLoginTime: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          oauthType: true,
          nickName: true,
          sessionKey: true,
          inviterId: true,
          phone: true,
          gender: true,
          openId: true,
          avatarUrl: true,
          unionId: true,
          birthday: true,
          identitycard: true,
          country: true,
          language: true,
          province: true,
          city: true,
          id: true,
          realName: true,
          username: true,
          roles: true,
          creatTime: true,
          lastLoginTime: true,
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
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          oauthType: true,
          nickName: true,
          sessionKey: true,
          inviterId: true,
          phone: true,
          gender: true,
          openId: true,
          avatarUrl: true,
          unionId: true,
          birthday: true,
          identitycard: true,
          country: true,
          language: true,
          province: true,
          city: true,
          id: true,
          realName: true,
          username: true,
          roles: true,
          creatTime: true,
          lastLoginTime: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/habituses")
  @ApiNestedQuery(HabitusFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Habitus",
    action: "read",
    possession: "any",
  })
  async findManyHabituses(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Habitus[]> {
    const query = plainToClass(HabitusFindManyArgs, request.query);
    const results = await this.service.findHabituses(params.id, {
      ...query,
      select: {
        id: true,
        testTime: true,

        user: {
          select: {
            id: true,
          },
        },

        currentHabitus: true,
        testResult: true,
        countResult: true,
        suggest: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/habituses")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectHabituses(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: HabitusWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      habituses: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/habituses")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateHabituses(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: HabitusWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      habituses: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/habituses")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectHabituses(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: HabitusWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      habituses: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/statuses")
  @ApiNestedQuery(StatusFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Status",
    action: "read",
    possession: "any",
  })
  async findManyStatuses(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Status[]> {
    const query = plainToClass(StatusFindManyArgs, request.query);
    const results = await this.service.findStatuses(params.id, {
      ...query,
      select: {
        id: true,
        updateTime: true,

        user: {
          select: {
            id: true,
          },
        },

        status: true,
        intValue: true,
        doubleValue: true,
        stringValue: true,
        dateValue: true,
        jsonValue: true,
        streamId: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/statuses")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectStatuses(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: StatusWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      statuses: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/statuses")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateStatuses(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: StatusWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      statuses: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/statuses")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectStatuses(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: StatusWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      statuses: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/incomeMetaGases")
  @ApiNestedQuery(IncomeMetaGasFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "IncomeMetaGas",
    action: "read",
    possession: "any",
  })
  async findManyIncomeMetaGases(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<IncomeMetaGas[]> {
    const query = plainToClass(IncomeMetaGasFindManyArgs, request.query);
    const results = await this.service.findIncomeMetaGases(params.id, {
      ...query,
      select: {
        id: true,
        income_date: true,

        user: {
          select: {
            id: true,
          },
        },

        amount: true,
        category: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/incomeMetaGases")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectIncomeMetaGases(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: IncomeMetaGasWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      incomeMetaGases: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/incomeMetaGases")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateIncomeMetaGases(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: IncomeMetaGasWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      incomeMetaGases: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/incomeMetaGases")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectIncomeMetaGases(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: IncomeMetaGasWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      incomeMetaGases: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/messages")
  @ApiNestedQuery(MessageFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "read",
    possession: "any",
  })
  async findManyMessages(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Message[]> {
    const query = plainToClass(MessageFindManyArgs, request.query);
    const results = await this.service.findMessages(params.id, {
      ...query,
      select: {
        id: true,
        sendTime: true,

        user: {
          select: {
            id: true,
          },
        },

        event: {
          select: {
            id: true,
          },
        },

        isRead: true,
        messageContent: true,
        messageType: true,
        messageSource: true,
        action: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/messages")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectMessages(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/messages")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateMessages(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/messages")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectMessages(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: MessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messages: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/expenseMetaGases")
  @ApiNestedQuery(ExpenseMetaGasFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ExpenseMetaGas",
    action: "read",
    possession: "any",
  })
  async findManyExpenseMetaGases(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<ExpenseMetaGas[]> {
    const query = plainToClass(ExpenseMetaGasFindManyArgs, request.query);
    const results = await this.service.findExpenseMetaGases(params.id, {
      ...query,
      select: {
        id: true,
        expense_date: true,

        user: {
          select: {
            id: true,
          },
        },

        amount: true,
        category: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/expenseMetaGases")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectExpenseMetaGases(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ExpenseMetaGasWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      expenseMetaGases: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/expenseMetaGases")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateExpenseMetaGases(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ExpenseMetaGasWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      expenseMetaGases: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/expenseMetaGases")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectExpenseMetaGases(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ExpenseMetaGasWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      expenseMetaGases: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/inquirys")
  @ApiNestedQuery(InquiryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Inquiry",
    action: "read",
    possession: "any",
  })
  async findManyInquirys(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Inquiry[]> {
    const query = plainToClass(InquiryFindManyArgs, request.query);
    const results = await this.service.findInquirys(params.id, {
      ...query,
      select: {
        id: true,
        inquiryTime: true,

        user: {
          select: {
            id: true,
          },
        },

        content: true,
        isPublic: true,
        title: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/inquirys")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectInquirys(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: InquiryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inquirys: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/inquirys")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateInquirys(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: InquiryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inquirys: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/inquirys")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectInquirys(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: InquiryWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      inquirys: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
