import { JsonValue } from "type-fest";
import { UserStatus } from "../userStatus/UserStatus";
import { HubitusCheckup } from "../hubitusCheckup/HubitusCheckup";

export type User = {
  id: string;
  username: string;
  roles: JsonValue;
  oauthType: string;
  openId: string;
  sessionKey: string;
  unionId: string;
  trueName: string | null;
  inviterId: string | null;
  phone: string | null;
  province: string | null;
  nickName: string | null;
  avatarUrl: string | null;
  gender?: "Unknown" | "Male" | "Female" | null;
  birthday: Date | null;
  city: string | null;
  userIdCard: string | null;
  country: string | null;
  language: string | null;
  creatTime: Date;
  lastLoginTime: Date;
  userStatuses?: Array<UserStatus>;
  hubitusCheckups?: Array<HubitusCheckup>;
};
