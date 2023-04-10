import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReplyListRelationFilter } from "../reply/ReplyListRelationFilter";

export type QuestionWhereInput = {
  id?: StringFilter;
  questionContent?: StringFilter;
  isPublic?: BooleanFilter;
  user?: UserWhereUniqueInput;
  replyQuestions?: ReplyListRelationFilter;
};
