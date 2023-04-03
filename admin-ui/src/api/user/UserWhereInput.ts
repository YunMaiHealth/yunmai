import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserStatusListRelationFilter } from "../userStatus/UserStatusListRelationFilter";
import { HubitusCheckupListRelationFilter } from "../hubitusCheckup/HubitusCheckupListRelationFilter";
import { MessageNotifyListRelationFilter } from "../messageNotify/MessageNotifyListRelationFilter";
import { UserQuestionListRelationFilter } from "../userQuestion/UserQuestionListRelationFilter";
import { ReplyQuestionListRelationFilter } from "../replyQuestion/ReplyQuestionListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  username?: StringFilter;
  oauthType?: StringFilter;
  openId?: StringFilter;
  sessionKey?: StringFilter;
  unionId?: StringFilter;
  trueName?: StringNullableFilter;
  inviterId?: StringNullableFilter;
  phone?: StringNullableFilter;
  province?: StringNullableFilter;
  nickName?: StringNullableFilter;
  avatarUrl?: StringNullableFilter;
  gender?: "Unknown" | "Male" | "Female";
  birthday?: DateTimeNullableFilter;
  city?: StringNullableFilter;
  userIdCard?: StringNullableFilter;
  country?: StringNullableFilter;
  language?: StringNullableFilter;
  userStatuses?: UserStatusListRelationFilter;
  hubitusCheckups?: HubitusCheckupListRelationFilter;
  messageNotifies?: MessageNotifyListRelationFilter;
  healthQuestions?: UserQuestionListRelationFilter;
  replyQuestions?: ReplyQuestionListRelationFilter;
};
