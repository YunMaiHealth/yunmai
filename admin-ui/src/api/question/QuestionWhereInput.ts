import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReplyListRelationFilter } from "../reply/ReplyListRelationFilter";

export type QuestionWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  replies?: ReplyListRelationFilter;
};
