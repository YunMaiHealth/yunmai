import { JsonValue } from "type-fest";
import { Hubitus } from "../hubitus/Hubitus";
import { Status } from "../status/Status";
import { Message } from "../message/Message";
import { Usepoint } from "../usepoint/Usepoint";
import { Getpoint } from "../getpoint/Getpoint";

export type User = {
  id: string;
  creatTime: Date;
  lastLoginTime: Date;
  username: string;
  roles: JsonValue;
  oauthType: string;
  openId: string;
  sessionKey: string | null;
  unionId: string;
  inviterId: string | null;
  phone: string | null;
  trueName: string | null;
  nickName: string | null;
  avatarUrl: string | null;
  gender?: "Unknown" | "Male" | "Female" | null;
  birthday: Date | null;
  userIdCard: string | null;
  country: string | null;
  province: string | null;
  city: string | null;
  language: string | null;
  hubituses?: Array<Hubitus>;
  Statuses?: Array<Status>;
  messages?: Array<Message>;
  usepoints?: Array<Usepoint>;
  getpoints?: Array<Getpoint>;
};
