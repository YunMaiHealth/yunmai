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
import { UserStatusFindManyArgs } from "../../userStatus/base/UserStatusFindManyArgs";
import { UserStatus } from "../../userStatus/base/UserStatus";
import { UserStatusWhereUniqueInput } from "../../userStatus/base/UserStatusWhereUniqueInput";
import { HubitusCheckupFindManyArgs } from "../../hubitusCheckup/base/HubitusCheckupFindManyArgs";
import { HubitusCheckup } from "../../hubitusCheckup/base/HubitusCheckup";
import { HubitusCheckupWhereUniqueInput } from "../../hubitusCheckup/base/HubitusCheckupWhereUniqueInput";
import { MessageNotifyFindManyArgs } from "../../messageNotify/base/MessageNotifyFindManyArgs";
import { MessageNotify } from "../../messageNotify/base/MessageNotify";
import { MessageNotifyWhereUniqueInput } from "../../messageNotify/base/MessageNotifyWhereUniqueInput";
import { UserQuestionFindManyArgs } from "../../userQuestion/base/UserQuestionFindManyArgs";
import { UserQuestion } from "../../userQuestion/base/UserQuestion";
import { UserQuestionWhereUniqueInput } from "../../userQuestion/base/UserQuestionWhereUniqueInput";
import { ReplyQuestionFindManyArgs } from "../../replyQuestion/base/ReplyQuestionFindManyArgs";
import { ReplyQuestion } from "../../replyQuestion/base/ReplyQuestion";
import { ReplyQuestionWhereUniqueInput } from "../../replyQuestion/base/ReplyQuestionWhereUniqueInput";

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
        id: true,
        username: true,
        roles: true,
        oauthType: true,
        openId: true,
        sessionKey: true,
        unionId: true,
        trueName: true,
        inviterId: true,
        phone: true,
        province: true,
        nickName: true,
        avatarUrl: true,
        gender: true,
        birthday: true,
        city: true,
        userIdCard: true,
        country: true,
        language: true,
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
        id: true,
        username: true,
        roles: true,
        oauthType: true,
        openId: true,
        sessionKey: true,
        unionId: true,
        trueName: true,
        inviterId: true,
        phone: true,
        province: true,
        nickName: true,
        avatarUrl: true,
        gender: true,
        birthday: true,
        city: true,
        userIdCard: true,
        country: true,
        language: true,
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
        id: true,
        username: true,
        roles: true,
        oauthType: true,
        openId: true,
        sessionKey: true,
        unionId: true,
        trueName: true,
        inviterId: true,
        phone: true,
        province: true,
        nickName: true,
        avatarUrl: true,
        gender: true,
        birthday: true,
        city: true,
        userIdCard: true,
        country: true,
        language: true,
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
          id: true,
          username: true,
          roles: true,
          oauthType: true,
          openId: true,
          sessionKey: true,
          unionId: true,
          trueName: true,
          inviterId: true,
          phone: true,
          province: true,
          nickName: true,
          avatarUrl: true,
          gender: true,
          birthday: true,
          city: true,
          userIdCard: true,
          country: true,
          language: true,
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
          id: true,
          username: true,
          roles: true,
          oauthType: true,
          openId: true,
          sessionKey: true,
          unionId: true,
          trueName: true,
          inviterId: true,
          phone: true,
          province: true,
          nickName: true,
          avatarUrl: true,
          gender: true,
          birthday: true,
          city: true,
          userIdCard: true,
          country: true,
          language: true,
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
  @common.Get("/:id/userStatuses")
  @ApiNestedQuery(UserStatusFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserStatus",
    action: "read",
    possession: "any",
  })
  async findManyUserStatuses(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<UserStatus[]> {
    const query = plainToClass(UserStatusFindManyArgs, request.query);
    const results = await this.service.findUserStatuses(params.id, {
      ...query,
      select: {
        id: true,
        status: true,
        intValue: true,
        doubleValue: true,
        stringValue: true,
        dateValue: true,
        jsonValue: true,
        blobValue: true,
        updateTime: true,
        streamId: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/userStatuses")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectUserStatuses(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserStatusWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userStatuses: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/userStatuses")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateUserStatuses(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserStatusWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userStatuses: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/userStatuses")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectUserStatuses(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserStatusWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userStatuses: {
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
  @common.Get("/:id/hubitusCheckups")
  @ApiNestedQuery(HubitusCheckupFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "HubitusCheckup",
    action: "read",
    possession: "any",
  })
  async findManyHubitusCheckups(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<HubitusCheckup[]> {
    const query = plainToClass(HubitusCheckupFindManyArgs, request.query);
    const results = await this.service.findHubitusCheckups(params.id, {
      ...query,
      select: {
        id: true,
        currentHabitus: true,
        testResult: true,
        countResult: true,
        suggest: true,
        testTime: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/hubitusCheckups")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectHubitusCheckups(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: HubitusCheckupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hubitusCheckups: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/hubitusCheckups")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateHubitusCheckups(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: HubitusCheckupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hubitusCheckups: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/hubitusCheckups")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectHubitusCheckups(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: HubitusCheckupWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hubitusCheckups: {
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
  @common.Get("/:id/messageNotifies")
  @ApiNestedQuery(MessageNotifyFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MessageNotify",
    action: "read",
    possession: "any",
  })
  async findManyMessageNotifies(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<MessageNotify[]> {
    const query = plainToClass(MessageNotifyFindManyArgs, request.query);
    const results = await this.service.findMessageNotifies(params.id, {
      ...query,
      select: {
        messageSource: true,
        id: true,
        sendTime: true,
        isNew: true,
        messageContent: true,
        messageType: true,

        event: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/messageNotifies")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectMessageNotifies(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: MessageNotifyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messageNotifies: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/messageNotifies")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateMessageNotifies(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: MessageNotifyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messageNotifies: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/messageNotifies")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectMessageNotifies(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: MessageNotifyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      messageNotifies: {
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
  @common.Get("/:id/healthQuestions")
  @ApiNestedQuery(UserQuestionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "UserQuestion",
    action: "read",
    possession: "any",
  })
  async findManyHealthQuestions(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<UserQuestion[]> {
    const query = plainToClass(UserQuestionFindManyArgs, request.query);
    const results = await this.service.findHealthQuestions(params.id, {
      ...query,
      select: {
        id: true,
        questionTime: true,
        questionTitle: true,
        questionContent: true,
        isPublic: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/healthQuestions")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectHealthQuestions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserQuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      healthQuestions: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/healthQuestions")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateHealthQuestions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserQuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      healthQuestions: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/healthQuestions")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectHealthQuestions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: UserQuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      healthQuestions: {
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
  @common.Get("/:id/replyQuestions")
  @ApiNestedQuery(ReplyQuestionFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ReplyQuestion",
    action: "read",
    possession: "any",
  })
  async findManyReplyQuestions(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<ReplyQuestion[]> {
    const query = plainToClass(ReplyQuestionFindManyArgs, request.query);
    const results = await this.service.findReplyQuestions(params.id, {
      ...query,
      select: {
        id: true,
        replyTime: true,
        questionReply: true,
        isPublic: true,

        replyUser: {
          select: {
            id: true,
          },
        },

        userQuestion: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/replyQuestions")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async connectReplyQuestions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ReplyQuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      replyQuestions: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/replyQuestions")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async updateReplyQuestions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ReplyQuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      replyQuestions: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/replyQuestions")
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "update",
    possession: "any",
  })
  async disconnectReplyQuestions(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ReplyQuestionWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      replyQuestions: {
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
