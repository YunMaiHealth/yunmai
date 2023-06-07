import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HabitusResolverBase } from "./base/habitus.resolver.base";
import { Habitus } from "./base/Habitus";
import { HabitusService } from "./habitus.service";
import { CreateHabitusArgs } from "../habitus/base/CreateHabitusArgs";
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { GatewatService } from "../ws/ws.service";
import { MetagasConfigFile } from "../metagas.config";
import { StatusResolver } from "../status/status.resolver";
import { StatusFindManyArgs } from "../status/base/StatusFindManyArgs";
import { UserWhereUniqueInput } from "../user/base/UserWhereUniqueInput";


@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@Resolver(() => Habitus)
export class HabitusResolver extends HabitusResolverBase {
  constructor(protected readonly gatewatService: GatewatService,
    protected readonly service: HabitusService,
    protected readonly statusResolver:StatusResolver,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @Mutation(() => Habitus)
  async createHabitus(@Args() args: CreateHabitusArgs): Promise<Habitus> {
    let habitus = await this.service.create({
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

    let userId =  args.data.user?.id!;
    let currentHabitus = args.data.currentHabitus;

        //调用发送消息接口
    if(userId!=null){
      // 根据名称查找消息对象
      const messageJson = MetagasConfigFile.messages.find(msg => msg.name === "完成体质检测")?.config || { messageContent: { messageText: "" }};
      messageJson.messageContent.messageText = messageJson.messageContent.messageText.replace("${currentHabitus}", currentHabitus);
      console.log("---currentMessagetText----"+messageJson.messageContent.messageText)

      await this.gatewatService.sendToUser(userId,"",JSON.stringify(messageJson));

    }

    // 获取当前体质检测人的好友关系列表
    const userWhereID: UserWhereUniqueInput = { id: userId};
        let statusArgs:StatusFindManyArgs={
      where:{
        user:userWhereID,
        status:{equals:"关注好友"}
      }
    };
    //返回状态表数据，状态为关注好友
    const userfriend =  await this.statusResolver.statuses(statusArgs);
    // 判断返回的好友信息是否存在
    //Array.isArray(userfriend) && userfriend.length === 0
    if (Object.values(userfriend).some(Boolean)) {
      for (let i = 0; i < userfriend.length; i++) {
        const friendList:string = userfriend[i].jsonValue as string ?? "";
        console.log("---获取好友列表friendList----"+friendList)
        // 判断好友JSON对象是否为空
        if (Object.keys(friendList).length === 0) {
          console.log("好友信息获取失败");
        } else {
          //调用给好友发送消息接口
          if(friendList!=null){
            //取出来替换变量
            const messageJson = MetagasConfigFile.messages.find(msg => msg.name === "更新健康信息")?.config || { messageContent: { messageText: "" }};
            messageJson.messageContent.messageText = messageJson.messageContent.messageText.replace("${currentHabitus}", currentHabitus);

 
            await this.gatewatService.sendfriends(userId,friendList,JSON.stringify(messageJson));
          }
        }
      }
    } else {
      console.log("您还没有好友信息");
    }
    return habitus;
  }
}
