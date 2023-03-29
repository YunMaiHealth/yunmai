import { InputJsonValue } from "../../types";
import { HubitusCheckupCreateNestedManyWithoutUsersInput } from "./HubitusCheckupCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  creatTime: Date;
  lastLoginTime: Date;
  username: string;
  password: string;
  roles: InputJsonValue;
  oauthType: string;
  openId: string;
  sessionKey: string;
  unionId: string;
  inviterId?: string | null;
  phone?: string | null;
  trueName?: string | null;
  nickName?: string | null;
  avatarUrl?: string | null;
  gender?: "Unknown" | "Male" | "Female" | null;
  birthday?: Date | null;
  userIdCard?: string | null;
  country?: string | null;
  province?: string | null;
  city?: string | null;
  language?: string | null;
  hubitusCheckups?: HubitusCheckupCreateNestedManyWithoutUsersInput;
};
