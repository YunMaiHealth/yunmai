import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReplyListRelationFilter } from "../reply/ReplyListRelationFilter";

export type QuestionWhereInput = {
  id?: StringFilter;
  questionTitle?: StringFilter;
  questionContent?: StringNullableFilter;
  isPublic?: StringFilter;
  user?: UserWhereUniqueInput;
  replyQuestions?: ReplyListRelationFilter;
};
