import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { HabitusListRelationFilter } from "../habitus/HabitusListRelationFilter";
import { StatusListRelationFilter } from "../status/StatusListRelationFilter";
import { IncomeMetaGasListRelationFilter } from "../incomeMetaGas/IncomeMetaGasListRelationFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { ExpenseMetaGasListRelationFilter } from "../expenseMetaGas/ExpenseMetaGasListRelationFilter";
import { InquiryListRelationFilter } from "../inquiry/InquiryListRelationFilter";

export type UserWhereInput = {
  oauthType?: StringFilter;
  nickName?: StringNullableFilter;
  openId?: StringFilter;
  sessionKey?: StringNullableFilter;
  unionId?: StringFilter;
  inviterId?: StringNullableFilter;
  phone?: StringNullableFilter;
  gender?: "Unknown" | "Male" | "Female";
  avatarUrl?: StringNullableFilter;
  birthday?: DateTimeNullableFilter;
  identitycard?: StringNullableFilter;
  country?: StringNullableFilter;
  language?: StringNullableFilter;
  province?: StringNullableFilter;
  city?: StringNullableFilter;
  id?: StringFilter;
  realName?: StringNullableFilter;
  username?: StringFilter;
  habituses?: HabitusListRelationFilter;
  statuses?: StatusListRelationFilter;
  incomeMetaGases?: IncomeMetaGasListRelationFilter;
  messages?: MessageListRelationFilter;
  expenseMetaGases?: ExpenseMetaGasListRelationFilter;
  inquirys?: InquiryListRelationFilter;
};
