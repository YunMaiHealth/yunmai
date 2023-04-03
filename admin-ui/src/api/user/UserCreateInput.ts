import { InputJsonValue } from "../../types";
import { UserStatusCreateNestedManyWithoutUsersInput } from "./UserStatusCreateNestedManyWithoutUsersInput";
import { HubitusCheckupCreateNestedManyWithoutUsersInput } from "./HubitusCheckupCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
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
  language?: string | null;
  creatTime: Date;
  lastLoginTime: Date;
  userStatuses?: UserStatusCreateNestedManyWithoutUsersInput;
  hubitusCheckups?: HubitusCheckupCreateNestedManyWithoutUsersInput;
};
