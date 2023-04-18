import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MessageResolverBase } from "./base/message.resolver.base";
import { Message } from "./base/Message";
import { MessageService } from "./message.service";
import { MessageInfo } from "./base/MessageInfo";
import { AclFilterResponseInterceptor } from "../interceptors/aclFilterResponse.interceptor";
import { MessageFindManyArgs } from "./base/MessageFindManyArgs";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Message)
export class MessageResolver extends MessageResolverBase {
  constructor(
    protected readonly service: MessageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
  
  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MessageInfo])
  @nestAccessControl.UseRoles({
    resource: "Message",
    action: "read",
    possession: "any",
  })
  async getMessageInfo(
    @graphql.Args() args: MessageFindManyArgs
  ): Promise<MessageInfo[]> {

 const allMessages =await this.service.findMany(args);
 const messageMap = new Map();
 const newMessageMap = new Map();
  for(let i=0;i<allMessages.length;i++){
       //获取每个类型最新消息信息
       let object = allMessages[i]
       let type = object.messageType
        if(messageMap.has(type)){
          if(object.sendTime>messageMap.get(type).sendTime){
            messageMap.set(type,allMessages[i])
          }
        }else{
          messageMap.set(type,allMessages[i])
        }
       //获取每个类型未读消息数量
       let isNew = object.isNew
       if(isNew==true){
          if(newMessageMap.has(type)){
            newMessageMap.set(type,newMessageMap.get(type)+1)
          }else{
            newMessageMap.set(type,1)
           }
       }
  }
  //合并数据
  let MessageNotify :MessageInfo[] = []
  for (var value of messageMap.values()) {
    if(newMessageMap.has(value.messageType)){
      value.newMessageNum = newMessageMap.get(value.messageType)
    }
    MessageNotify.push(value)
   }

    return MessageNotify;
  }

}



