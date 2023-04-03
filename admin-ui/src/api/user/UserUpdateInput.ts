import { InputJsonValue } from "../../types";
import { UserStatusUpdateManyWithoutUsersInput } from "./UserStatusUpdateManyWithoutUsersInput";
import { HubitusCheckupUpdateManyWithoutUsersInput } from "./HubitusCheckupUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
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
  language?: string | null;
  creatTime?: Date;
  lastLoginTime?: Date;
  userStatuses?: UserStatusUpdateManyWithoutUsersInput;
  hubitusCheckups?: HubitusCheckupUpdateManyWithoutUsersInput;
};
