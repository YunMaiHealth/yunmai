import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { HubitusCheckupListRelationFilter } from "../hubitusCheckup/HubitusCheckupListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  username?: StringFilter;
  oauthType?: StringFilter;
  openId?: StringFilter;
  sessionKey?: StringFilter;
  unionId?: StringFilter;
  inviterId?: StringNullableFilter;
  phone?: StringNullableFilter;
  trueName?: StringNullableFilter;
  nickName?: StringNullableFilter;
  avatarUrl?: StringNullableFilter;
  gender?: "Unknown" | "Male" | "Female";
  birthday?: DateTimeNullableFilter;
  userIdCard?: StringNullableFilter;
  country?: StringNullableFilter;
  province?: StringNullableFilter;
  city?: StringNullableFilter;
  language?: StringNullableFilter;
  hubitusCheckups?: HubitusCheckupListRelationFilter;
};
