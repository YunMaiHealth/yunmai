import { InputJsonValue } from "../../types";
import { UserStatusUpdateManyWithoutUsersInput } from "./UserStatusUpdateManyWithoutUsersInput";
import { HubitusCheckupUpdateManyWithoutUsersInput } from "./HubitusCheckupUpdateManyWithoutUsersInput";
import { MessageNotifyUpdateManyWithoutUsersInput } from "./MessageNotifyUpdateManyWithoutUsersInput";
import { UserQuestionUpdateManyWithoutUsersInput } from "./UserQuestionUpdateManyWithoutUsersInput";
import { ReplyQuestionUpdateManyWithoutUsersInput } from "./ReplyQuestionUpdateManyWithoutUsersInput";
import { UsePointUpdateManyWithoutUsersInput } from "./UsePointUpdateManyWithoutUsersInput";
import { GetPointUpdateManyWithoutUsersInput } from "./GetPointUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  language?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  oauthType?: string;
  openId?: string;
  sessionKey?: string;
  unionId?: string;
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
  creatTime?: Date;
  lastLoginTime?: Date;
  userStatuses?: UserStatusUpdateManyWithoutUsersInput;
  hubitusCheckups?: HubitusCheckupUpdateManyWithoutUsersInput;
  messageNotifies?: MessageNotifyUpdateManyWithoutUsersInput;
  healthQuestions?: UserQuestionUpdateManyWithoutUsersInput;
  replyQuestions?: ReplyQuestionUpdateManyWithoutUsersInput;
  usePoints?: UsePointUpdateManyWithoutUsersInput;
  getPoints?: GetPointUpdateManyWithoutUsersInput;
};
