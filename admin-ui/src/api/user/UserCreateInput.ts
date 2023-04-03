import { InputJsonValue } from "../../types";
import { UserStatusCreateNestedManyWithoutUsersInput } from "./UserStatusCreateNestedManyWithoutUsersInput";
import { HubitusCheckupCreateNestedManyWithoutUsersInput } from "./HubitusCheckupCreateNestedManyWithoutUsersInput";
import { MessageNotifyCreateNestedManyWithoutUsersInput } from "./MessageNotifyCreateNestedManyWithoutUsersInput";
import { UserQuestionCreateNestedManyWithoutUsersInput } from "./UserQuestionCreateNestedManyWithoutUsersInput";
import { ReplyQuestionCreateNestedManyWithoutUsersInput } from "./ReplyQuestionCreateNestedManyWithoutUsersInput";
import { UsePointCreateNestedManyWithoutUsersInput } from "./UsePointCreateNestedManyWithoutUsersInput";
import { GetPointCreateNestedManyWithoutUsersInput } from "./GetPointCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  language?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  oauthType: string;
  openId: string;
  sessionKey: string;
  unionId: string;
  trueName?: string | null;
  inviterId?: string | null;
  phone?: string | null;
  province?: string | null;
  nickName?: string | null;
  avatarUrl?: string | null;
  gender?: "Unknown" | "Male" | "Female" | null;
  birthday?: Date | null;
  city?: string | null;
  userIdCard?: string | null;
  country?: string | null;
  creatTime: Date;
  lastLoginTime: Date;
  userStatuses?: UserStatusCreateNestedManyWithoutUsersInput;
  hubitusCheckups?: HubitusCheckupCreateNestedManyWithoutUsersInput;
  messageNotifies?: MessageNotifyCreateNestedManyWithoutUsersInput;
  healthQuestions?: UserQuestionCreateNestedManyWithoutUsersInput;
  replyQuestions?: ReplyQuestionCreateNestedManyWithoutUsersInput;
  usePoints?: UsePointCreateNestedManyWithoutUsersInput;
  getPoints?: GetPointCreateNestedManyWithoutUsersInput;
};
