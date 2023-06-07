import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { WsStartGateway } from './ws.gateway';
import { CreateMessageArgs } from '../message/base/CreateMessageArgs';
import { MessageResolver } from '../message/message.resolver';
import { UserWhereUniqueInput } from '../user/base/UserWhereUniqueInput';
import { CreateIncomeMetaGasArgs } from '../incomeMetaGas/base/CreateIncomeMetaGasArgs';
import { CreateStatusArgs } from '../status/base/CreateStatusArgs';
import { IncomeMetaGasResolver } from '../incomeMetaGas/incomeMetaGas.resolver';
import { StatusResolver } from '../status/status.resolver';
import { EnumMessageMessageType } from '../message/base/EnumMessageMessageType';
import { CreateEventArgs } from '../event/base/CreateEventArgs';
import { EventWhereUniqueInput } from '../event/base/EventWhereUniqueInput';
import { EventResolver } from '../event/event.resolver';
import { StatusFindManyArgs } from '../status/base/StatusFindManyArgs';
import { UpdateStatusArgs } from '../status/base/UpdateStatusArgs';
import { UserResolver } from '../user/user.resolver';
import { UserFindUniqueArgs } from '../user/base/UserFindUniqueArgs';
import { UserFindManyArgs } from '../user/base/UserFindManyArgs';

@Injectable()
export class GatewatService {
  constructor(
    @Inject(forwardRef(() => WsStartGateway))
    private wsStartGateway: WsStartGateway,

    private messageResolver :MessageResolver,
    private incomeMetaGasResolver:IncomeMetaGasResolver,
    private statusResolver:StatusResolver,
    private eventResolver:EventResolver,
    private readonly userResolver: UserResolver,
  ) {}
    
    //向用户发送信息，增加消息表，元气表数据，增加或更新状态表当前元气值
    //注册新用户成功，推荐新用户成功时，完成体质检测时调用，注册新用户以及完成体质检测跟推荐人没有关系
    async sendToUser(clientId: string, activityId: string,messageString: string) {
      //默认是用户id
      let userInput: UserWhereUniqueInput = { id: clientId};
      //如果有推荐人id，则用户id置为推荐人id，否则还是用户id
      if(activityId!=null&&activityId!=""){
        userInput = { id: activityId};
        console.log("---推荐人----"+userInput.id)
      }else{
        userInput = { id: clientId};
      }
      console.log("---用户是注册人----"+clientId)
      // 获取指定键所对应的值
      let messages = JSON.parse(messageString);
      console.log("---messageString----"+messageString)
      
      //添加消息信息，消息接收人是推荐人，发送人是注册用户
      let messageArgs:CreateMessageArgs=  { 
        data:{
          isRead: false,
          messageContent: JSON.stringify(messages.messageContent),
          messageSource: clientId,
          messageType: messages.messageType,
          sendTime: new Date(),
          user: userInput!
        }
      }
      
      //元气表参数，用户是注册用户
      let metaArgs:CreateIncomeMetaGasArgs = {
        data:{
          income_date : new Date(),
          category : messages.category,
          amount : parseInt(messages.amount),
          user : userInput!//此时应该是注册人id
        }
      }

      // 根据用户id或者推荐人id获取当前元气值数据
      let userInputArgs:StatusFindManyArgs={
        where:{
          user: {
              id: userInput.id
          },
          status:{equals:"当前元气值"}
        }
      };
      const userStatus =  await this.statusResolver.statuses(userInputArgs);
      //判断用户id获取状态表当前元气值是否为空如果为空则创建状态表数据
      if (Array.isArray(userStatus) && userStatus.length === 0){
        console.log("---状态表当前元气值为空----"+userInput.id)
        // 状态表参数
        let statusArgs:CreateStatusArgs = {
          data:{
            updateTime : new Date(),
            status : messages.status,
            intValue : parseInt(messages.amount),
            streamId : "",
            user : userInput!
          }
        }
          //创建状态表数据，只有注册时才给状态表插入当前元气值的数据
        this.statusResolver.createStatus(statusArgs) 
      }else{
        const metagasInt = userStatus[0].intValue;
        console.log("---metagasInt----"+metagasInt)
        const statusID = userStatus[0].id;
        console.log("---statusID----"+statusID)
        //判断不为空，则更新该用户元气值
        if(metagasInt !=null ){
          //将获取到的元气值数据叠加现在传入的元气值
          let updateStatusArgs:UpdateStatusArgs = {
            data:{
              updateTime : new Date(),
              status : messages.status,
              intValue : metagasInt+parseInt(messages.amount),
              streamId : ""
            },
            where:{
              id:statusID
            }
          }
          //更新状态表数据
          this.statusResolver.updateStatus(updateStatusArgs)          
        }
      }
      //创建消息表数据
      this.messageResolver.createMessage(messageArgs)
      console.log("---创建消息1111----"+JSON.stringify(messageArgs.data.messageContent))
      //创建元气表数据
      this.incomeMetaGasResolver.createIncomeMetaGas(metaArgs)
      console.log("---创建元气----"+metaArgs.data.amount)
            
      //向客户端发送消息
      this.wsStartGateway.sendToClient(clientId,messageString)
      this.wsStartGateway.sendToAllUser("成功接收到消息")
    }

    //有推荐人的用户注册后双方互相添加好友关系时调用
    //双方状态表均增加好友关注数据，消息表均互相发消息数据
    async addFriend(clientId: string,activityId: string, messageString: string) {
      console.log("---推荐新用户消息----"+messageString)
      //推荐人id
      const activityInput: UserWhereUniqueInput = { id: activityId};
      console.log("---推荐人id----"+activityId)
      //注册用户id
      const userInput: UserWhereUniqueInput = { id: clientId};
      console.log("---新用户id----"+clientId)
      //通过推荐人id获取推荐人用户名
      let activityArgs:UserFindUniqueArgs={
        where:{
          id : activityId
        }
      }
      const activityInfo = await this.userResolver.user(activityArgs);
      //获取推荐人昵称，如果昵称为空则取真实姓名，都为空则为匿名用户
      let friendNickName = activityInfo?.nickName ?? activityInfo?.realName ?? "匿名用户";
      console.log("---推荐人昵称----"+friendNickName)
      //通过注册用户id获取注册用户信息
      let userArgs:UserFindUniqueArgs={
        where:{
          id : clientId
        }
      }
      const userInfo = await this.userResolver.user(userArgs);
      //获取注册用户昵称，如果昵称为空则取真实姓名，都为空则为匿名用户
      let userNickName = userInfo?.nickName ?? userInfo?.realName ?? "匿名用户";
      console.log("---用户昵称----"+userNickName)
      // 获取指定键所对应的值
      let messageJson = JSON.parse(messageString);
  
      // 复制 messageJson.messageContent 对象
      let friendMessageContent = { ...messageJson.messageContent };
      friendMessageContent.messageTitle = friendMessageContent.messageTitle.replace("${friendName}", friendNickName);
      console.log("---推荐人消息----"+friendMessageContent.messageTitle)

      // 复制 messageJson.messageContent 对象
      let userMessageContent = { ...messageJson.messageContent };
      userMessageContent.messageTitle = userMessageContent.messageTitle.replace("${friendName}", userNickName);
      console.log("---用户消息----"+userMessageContent.messageTitle)

      // 根据推荐人id获取关注好友数据
      let activityInputArgs:StatusFindManyArgs={
        where:{
          user: {
              id: activityId
          },
          status:{equals:"关注好友"}
        }
      };
      const activityStatus =  await this.statusResolver.statuses(activityInputArgs);
      console.log("---查询推荐人状态表数据----"+activityStatus)
      //判断推荐人id获取状态表关注好友是否为空如果为空则创建状态表数据
      if (Array.isArray(activityStatus) && activityStatus.length === 0){
        //添加推荐人状态表参数，此处给推荐人状态表添加关注好友数据，好友id就是用户id
        const friends = [clientId];
        const friendJson =  JSON.stringify(friends);
        console.log("---查询登录用户好友列表----"+friendJson)
        let activityStatusArgs:CreateStatusArgs = {
          data:{
            updateTime : new Date(),
            status : "关注好友",
            jsonValue : friendJson,
            streamId : "",
            user : activityInput!
          }
        }
        //创建推荐人状态表数据
        this.statusResolver.createStatus(activityStatusArgs)
        console.log("---创建推荐人状态表数据----")
      }else{
        const statusID = activityStatus[0].id;
        const friendJson:string = activityStatus[0].jsonValue as string;

        console.log("---statusID----"+statusID)
        //判断不为空，则更新该推荐人的关注好友数据
        if(friendJson !=null){
          // 将 JsonValue 类型转换为 JsonArray 类型
          const arrayValue = JSON.parse(friendJson); 
          console.log("---推荐人好友列表----"+friendJson)
          console.log("---推荐人id----"+clientId)
          arrayValue.push(clientId); 
          
          const friends = JSON.stringify(arrayValue)
          console.log("---推荐人最新好友列表----"+friends)

          //将获取到的关注好友数据叠加现在传入的好友id
          let updateStatusArgs:UpdateStatusArgs = {
            data:{
              updateTime : new Date(),
              status : "关注好友",
              jsonValue : friends,
              streamId : ""
            },
            where:{
              id:statusID
            }
          }
          //更新状态表数据
          this.statusResolver.updateStatus(updateStatusArgs)        
          console.log("---更新推荐人状态表数据----")      
        }
      }

       //添加注册用户状态表参数，此处给注册用户状态表添加关注好友数据，注册用户id就是用户id
       const friends = [activityId];
       const friendJson =  JSON.stringify(friends);
       console.log("---注册用户好友列表----"+friendJson)  
       let userStatusArgs:CreateStatusArgs = {
        data:{
          updateTime : new Date(),
          status : "关注好友",
          jsonValue : friendJson,
          streamId : "",
          user : userInput!
        }
      }      
      console.log("---userStatusArgs----"+userStatusArgs)
      //添加推荐人消息信息，此处给该用户发消息，提示推荐人关注了他，消息来源是推荐人，消息接收人是用户
      let activityMessageArgs:CreateMessageArgs=  { 
        data:{
          isRead: false,
          messageContent: JSON.stringify(friendMessageContent),
          messageSource: activityId,
          messageType: messageJson.messageType,
          sendTime: new Date(),
          user: userInput!
        }
      }
      //添加注册用户消息，此处给该推荐人发消息，提示注册用户关注了他，消息来源是注册用户，消息接收人是推荐人
      let userMessageArgs:CreateMessageArgs=  { 
        data:{
          isRead: false,
          messageContent: JSON.stringify(userMessageContent),
          messageSource: clientId,
          messageType: messageJson.messageType,
          sendTime: new Date(),
          user: activityInput!
        }
      } 


      //创建注册用户状态表数据
      this.statusResolver.createStatus(userStatusArgs)
      console.log("---创建注册用户好友列表----")  
      //创建推荐人消息表数据
      this.messageResolver.createMessage(activityMessageArgs)
      //创建注册用户消息表数据
      this.messageResolver.createMessage(userMessageArgs)

      //向客户端发送消息
      this.wsStartGateway.sendToClient(clientId,messageString)
      this.wsStartGateway.sendToAllUser("成功接收到消息")
    }
    
    //手动添加好友后双方互相发送消息，和上一接口不同的地方是不需要给登录用户状态表增加数据
    //登录用户状态表均增加好友关注数据已在前端处理，此处只发消息
    //此接口只在gateway中status调用
    async addFriendMessage(clientId: string,activityId: string, messageString: string) {
      console.log("---添加好友消息----"+messageString)
      //好友id
      const activityInput: UserWhereUniqueInput = { id: activityId};
      console.log("---好友id----"+activityId)
      //注册用户id
      const userInput: UserWhereUniqueInput = { id: clientId};
      console.log("---登录用户id----"+clientId)
      //通过好友id获取好友用户名
      let activityArgs:UserFindUniqueArgs={
        where:{
          id : activityId
        }
      }
      const activityInfo = await this.userResolver.user(activityArgs);
      //获取好友昵称，如果昵称为空则取真实姓名，都为空则为匿名用户
      let friendNickName = activityInfo?.nickName ?? activityInfo?.realName ?? "匿名用户";
      console.log("---好友昵称----"+friendNickName)
      //通过登录用户id获取用户信息
      let userArgs:UserFindUniqueArgs={
        where:{
          id : clientId
        }
      }
      const userInfo = await this.userResolver.user(userArgs);
      //获取登录用户昵称，如果昵称为空则取真实姓名，都为空则为匿名用户
      let userNickName = userInfo?.nickName ?? userInfo?.realName ?? "匿名用户";
      console.log("---用户昵称----"+userNickName)
      // 获取指定键所对应的值
      let messageJson = JSON.parse(messageString);
  
      // 复制 messageJson.messageContent 对象
      let friendMessageContent = { ...messageJson.messageContent };
      friendMessageContent.messageTitle = friendMessageContent.messageTitle.replace("${friendName}", friendNickName);
      console.log("---好友消息----"+friendMessageContent.messageTitle)

      // 复制 messageJson.messageContent 对象
      let userMessageContent = { ...messageJson.messageContent };
      userMessageContent.messageTitle = userMessageContent.messageTitle.replace("${friendName}", userNickName);
      console.log("---用户消息----"+userMessageContent.messageTitle)

      // 根据好友id获取关注好友数据
      let activityInputArgs:StatusFindManyArgs={
        where:{
          user: {
              id: activityId
          },
          status:{equals:"关注好友"}
        }
      };
      const activityStatus =  await this.statusResolver.statuses(activityInputArgs);
      console.log("---查询好友状态表数据----"+activityStatus)
      //判断推荐人id获取状态表关注好友是否为空如果为空则创建状态表数据
      if (Array.isArray(activityStatus) && activityStatus.length === 0){
        //添加推荐人状态表参数，此处给推荐人状态表添加关注好友数据，好友id就是用户id
        const friends = [clientId];
        const friendJson =  JSON.stringify(friends);
        console.log("---查询好友的好友列表----"+friendJson)
        let activityStatusArgs:CreateStatusArgs = {
          data:{
            updateTime : new Date(),
            status : "关注好友",
            jsonValue : friendJson,
            streamId : "",
            user : activityInput!
          }
        }
        //创建推荐人状态表数据
        this.statusResolver.createStatus(activityStatusArgs)
        console.log("---创建好友状态表数据----")
      }else{
        const statusID = activityStatus[0].id;
        const friendJson:string = activityStatus[0].jsonValue as string;

        console.log("---statusID----"+statusID)
        //判断不为空，则更新该推荐人的关注好友数据
        if(friendJson !=null){
          // 将 JsonValue 类型转换为 JsonArray 类型
          const arrayValue = JSON.parse(friendJson); 
          console.log("---好友的好友列表----"+friendJson)
          console.log("---好友id----"+clientId)
          arrayValue.push(clientId); 
          
          const friends = JSON.stringify(arrayValue)
          console.log("---好友最新的好友列表----"+friends)

          //将获取到的关注好友数据叠加现在传入的好友id
          let updateStatusArgs:UpdateStatusArgs = {
            data:{
              updateTime : new Date(),
              status : "关注好友",
              jsonValue : friends,
              streamId : ""
            },
            where:{
              id:statusID
            }
          }
          //更新状态表数据
          this.statusResolver.updateStatus(updateStatusArgs)        
          console.log("---更新好友状态表数据----")      
        }
      }

      //添加好友消息信息，此处给该用户发消息，提示好友关注了他，消息来源是好友，消息接收人是用户
      let activityMessageArgs:CreateMessageArgs=  { 
        data:{
          isRead: false,
          messageContent: JSON.stringify(friendMessageContent),
          messageSource: activityId,
          messageType: messageJson.messageType,
          sendTime: new Date(),
          user: userInput!
        }
      }
      //添加注册用户消息，此处给该好友发消息，提示登录用户关注了他，消息来源是登录用户，消息接收人是好友
      let userMessageArgs:CreateMessageArgs=  { 
        data:{
          isRead: false,
          messageContent: JSON.stringify(userMessageContent),
          messageSource: clientId,
          messageType: messageJson.messageType,
          sendTime: new Date(),
          user: activityInput!
        }
      } 

      console.log("---创建登录用户好友列表----")  
      //创建推荐人消息表数据
      this.messageResolver.createMessage(activityMessageArgs)
      //创建注册用户消息表数据
      this.messageResolver.createMessage(userMessageArgs)

      //向客户端发送消息
      this.wsStartGateway.sendToClient(clientId,messageString)
      this.wsStartGateway.sendToAllUser("成功接收到消息")
    }  

    //体质检测成功后有好友的向用户发送信息，增加事件表，消息表数据
    async sendfriends(clientId: string, friendList: string, messageString: string) {
      //通过推荐人id获取推荐人用户名
      let userArgs:UserFindUniqueArgs={
        where:{
          id : clientId
        }
      }
      const userInfo = await this.userResolver.user(userArgs);
      //获取好友姓名，如果昵称为空则取真实姓名，都为空则为匿名
      let friendName = userInfo?.nickName ?? userInfo?.realName ?? "匿名用户";
      console.log("---获取好友姓名----"+friendName)
      // 将messageString解析为json
      let messages = JSON.parse(messageString);
      // 获取指定键所对应的值
      messages.messageContent.messageTitle = messages.messageContent.messageTitle.replace("${friendName}", friendName);
      console.log("---获取好友姓名messageContent----"+messages.messageContent.messageTitle)

      //事件表参数，事件干系人存好友列表
      let evenArgs:CreateEventArgs = {
        data:{
          eventTime : new Date(),
          eventType : messages.messageType,
          eventName: messages.category,
          eventParam: "",//暂时不管
          relateUser:friendList
        }
      }
      
      //创建事件表数据
      let event = await this.eventResolver.createEvent(evenArgs);
      
      let enentid = event.id;
      //获取事件id
      const eventInput: EventWhereUniqueInput = { id: enentid};
      const friends = JSON.parse(friendList);
      //遍历好友列表
      for (let i = 0; i < friends.length; i++) {
        const friendInput: UserWhereUniqueInput = { id: friends[i]};
        console.log("---遍历好友列表----"+friends[i])
        //根据用户id查询该用户是否在用户表中存在
        let userFindManyArgs:UserFindManyArgs = {
          where:{
            id:{
              equals:friends[i]
            }
          }
        }
        const userNum = await this.userResolver._usersMeta(userFindManyArgs);
        //判断该好友是否存在用户表
        if(userNum.count !== 0){
          //给好友发消息，消息来源是用户id，接收用户id存放解析后的好友id
          let messageArgs:CreateMessageArgs=  { 
              data:{
                isRead: false,
                messageContent: JSON.stringify(messages.messageContent),
                messageSource: clientId,
                messageType: messages.messageType,
                sendTime: new Date(),
                user: friendInput!,
                event: eventInput!
              }
          }
          //创建消息表数据
          await  this.messageResolver.createMessage(messageArgs)
        }else{
          console.log("该好友在用户表中不存在！");
        }
      }
      //向客户端发送消息
      this.wsStartGateway.sendToClient(clientId,messageString)
      this.wsStartGateway.sendToAllUser("成功接收到消息")
    }
}
