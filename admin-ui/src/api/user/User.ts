import { JsonValue } from "type-fest";
import { Habitus } from "../habitus/Habitus";
import { Status } from "../status/Status";
import { IncomeMetaGas } from "../incomeMetaGas/IncomeMetaGas";
import { Message } from "../message/Message";
import { ExpenseMetaGas } from "../expenseMetaGas/ExpenseMetaGas";
import { Inquiry } from "../inquiry/Inquiry";

export type User = {
  oauthType: string | null;
  nickName: string | null;
  sessionKey: string;
  inviterId: string | null;
  phone: string | null;
  gender?: "UNKNOWN" | "MALE" | "FEMALE" | null;
  openId: string;
  avatarUrl: string | null;
  unionId: string | null;
  birthday: Date | null;
  identitycard: string | null;
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
  habituses?: Array<Habitus>;
  statuses?: Array<Status>;
  incomeMetaGases?: Array<IncomeMetaGas>;
  messages?: Array<Message>;
  expenseMetaGases?: Array<ExpenseMetaGas>;
  inquirys?: Array<Inquiry>;
};
