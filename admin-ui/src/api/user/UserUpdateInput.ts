import { InputJsonValue } from "../../types";
import { HubitusUpdateManyWithoutUsersInput } from "./HubitusUpdateManyWithoutUsersInput";
import { StatusUpdateManyWithoutUsersInput } from "./StatusUpdateManyWithoutUsersInput";
import { IncomeMataGasUpdateManyWithoutUsersInput } from "./IncomeMataGasUpdateManyWithoutUsersInput";
import { MessageUpdateManyWithoutUsersInput } from "./MessageUpdateManyWithoutUsersInput";
import { ExpenseMataGasUpdateManyWithoutUsersInput } from "./ExpenseMataGasUpdateManyWithoutUsersInput";
import { InquiryUpdateManyWithoutUsersInput } from "./InquiryUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  oauthType?: string;
  nickName?: string | null;
  openId?: string;
  sessionKey?: string | null;
  unionId?: string;
  inviterId?: string | null;
  phone?: string | null;
  gender?: "Unknown" | "Male" | "Female" | null;
  avatarUrl?: string | null;
  birthday?: Date | null;
  identitycard?: string | null;
  country?: string | null;
  language?: string | null;
  province?: string | null;
  city?: string | null;
  realName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  creatTime?: Date;
  lastLoginTime?: Date;
  hubituses?: HubitusUpdateManyWithoutUsersInput;
  statuses?: StatusUpdateManyWithoutUsersInput;
  incomeMataGases?: IncomeMataGasUpdateManyWithoutUsersInput;
  messages?: MessageUpdateManyWithoutUsersInput;
  expenseMataGases?: ExpenseMataGasUpdateManyWithoutUsersInput;
  inquirys?: InquiryUpdateManyWithoutUsersInput;
};
