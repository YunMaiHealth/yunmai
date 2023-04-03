import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReplyQuestionListRelationFilter } from "../replyQuestion/ReplyQuestionListRelationFilter";

export type UserQuestionWhereInput = {
  id?: StringFilter;
  questionTitle?: StringFilter;
  questionContent?: StringNullableFilter;
  isPublic?: StringFilter;
  user?: UserWhereUniqueInput;
  replyQuestions?: ReplyQuestionListRelationFilter;
};
