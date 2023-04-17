import * as common from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AuthService } from "./auth.service";
import { GqlDefaultAuthGuard } from "./gqlDefaultAuth.guard";
import { UserData } from "./userData.decorator";
import { LoginArgs } from "./LoginArgs";
import { UserInfo } from "./UserInfo";
import { User } from "../user/base/User";
import { CreateUserArgs } from "../user/base/CreateUserArgs";
import { UserService } from "../user/user.service";

@Resolver(UserInfo)
export class AuthResolver {
 constructor(private readonly authService: AuthService,
     private readonly service: UserService) {}
  @Mutation(() => UserInfo)
  async login(@Args() args: LoginArgs): Promise<UserInfo> {
    return this.authService.login(args.credentials);
	
  async userInfo(@UserData() userInfo: UserInfo): Promise<UserInfo> {
    return userInfo;
  }

  @Mutation(() => User)
  async registerUser(@Args() args: CreateUserArgs): Promise<User> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }
}
