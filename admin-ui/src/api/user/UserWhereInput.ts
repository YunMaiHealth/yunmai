import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HubitusListRelationFilter } from "../hubitus/HubitusListRelationFilter";
import { StatusListRelationFilter } from "../status/StatusListRelationFilter";
import { GetpointListRelationFilter } from "../getpoint/GetpointListRelationFilter";
import { UsepointListRelationFilter } from "../usepoint/UsepointListRelationFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { QuestionListRelationFilter } from "../question/QuestionListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  trueName?: StringNullableFilter;
  username?: StringFilter;
  hubituses?: HubitusListRelationFilter;
  statuses?: StatusListRelationFilter;
  getpoints?: GetpointListRelationFilter;
  usepoints?: UsepointListRelationFilter;
  messages?: MessageListRelationFilter;
  questions?: QuestionListRelationFilter;
};
