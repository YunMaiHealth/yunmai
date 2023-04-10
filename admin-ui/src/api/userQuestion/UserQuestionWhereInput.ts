import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReplyQuestionListRelationFilter } from "../replyQuestion/ReplyQuestionListRelationFilter";

export type UserQuestionWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  replyQuestions?: ReplyQuestionListRelationFilter;
};
