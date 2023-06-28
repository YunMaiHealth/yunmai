import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "../user/base/User";

@ObjectType()
export class UserInfo implements Partial<User> {
  @Field(() => String)
  id!: string;
  @Field(() => String)
  username!: string;
  @Field(() => [String])
  roles!: string[];
  @Field(() => String, { nullable: true })
  accessToken?: string;
  // 新增昵称属性
  @Field(() => String, { nullable: true,
  })
  nickName!: string | null;
  // 新增头像属性
  @Field(() => String, { nullable: true,
  })
  avatarUrl!: string | null;
  //新增sessionKey属性
  @Field(() => String)
  sessionKey!: string;
  //新增openId属性
//   @Field(() => String)
//   openId!: string;
}