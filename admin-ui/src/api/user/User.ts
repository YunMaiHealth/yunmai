import { JsonValue } from "type-fest";
import { Hubitus } from "../hubitus/Hubitus";
import { Status } from "../status/Status";
import { Getpoint } from "../getpoint/Getpoint";
import { Usepoint } from "../usepoint/Usepoint";
import { Message } from "../message/Message";
import { Question } from "../question/Question";

export type User = {
  oauthType: string;
  nickName: string | null;
  openId: string;
  sessionKey: string | null;
  unionId: string;
  inviterId: string | null;
  phone: string | null;
  gender?: "Unknown" | "Male" | "Female" | null;
  avatarUrl: string | null;
  birthday: Date | null;
  userIdCard: string | null;
  country: string | null;
  language: string | null;
  province: string | null;
  city: string | null;
  id: string;
  realName: string | null;
  username: string;
  roles: JsonValue;
  creatTime: Date;
  lastLoginTime: Date;
  hubituses?: Array<Hubitus>;
  statuses?: Array<Status>;
  getpoints?: Array<Getpoint>;
  usepoints?: Array<Usepoint>;
  messages?: Array<Message>;
  questions?: Array<Question>;
};
