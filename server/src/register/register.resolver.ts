
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { CreateUserArgs } from "../user/base/CreateUserArgs";
import { UserService } from "../user/user.service";
import { UserInfo } from "../auth/UserInfo";
import { AuthService } from "../auth/auth.service";
import { GatewatService } from "../ws/ws.service";
import { MetagasConfigFile } from "../metagas.config";


@Resolver(UserInfo)
export class RegisterResolver {
 constructor(private readonly authService: AuthService,
    private readonly gatewatService: GatewatService,
    private readonly service: UserService,
   ) {}

  @Mutation(() => UserInfo)
  async registerUser(@Args() args: CreateUserArgs): Promise<UserInfo> {
    //注册用户信息
     await this.service.create({
       ...args,
       data: args.data,
     });

    //返回用户登录信息
    let credentials = {
        username:args.data.username, 
        password:args.data.password
      }
    let userInfo =  await this.authService.login(credentials);
    //用户注册成功后获取用户id
    let userId = userInfo.id;


    // 获取配置文件中新用户注册的消息信息
    let messageString = JSON.stringify(MetagasConfigFile.messages.find(msg => msg.name === "新用户注册")?.config ?? {});
    await this.gatewatService.sendToUser(userId, "", messageString);

    //有推荐人的处理流程  
    if(userInfo!=null){
      let activityId = args.data.inviterId
      console.log("---获取推荐人id----"+activityId)
      //推荐人id不为空
      if(activityId!=null&&activityId!=""){
        console.log("---有推荐人----"+activityId)

        // 获取配置文件中关注好友的消息信息
        let addFriendMessage = JSON.stringify(MetagasConfigFile.messages.find(msg => msg.name === "关注好友")?.config ?? {});
        await this.gatewatService.addFriend(userId, activityId, addFriendMessage );
     
    
        // 获取配置文件中推荐新用户的消息信息
        const referMessage = JSON.stringify(MetagasConfigFile.messages.find(msg => msg.name === "推荐新用户")?.config ?? {});
        await this.gatewatService.sendToUser(userId,activityId,referMessage);
      }else{
        activityId = "";
      }
    }
    return userInfo;
  }
}
