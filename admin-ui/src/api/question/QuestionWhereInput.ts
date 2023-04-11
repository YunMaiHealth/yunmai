import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReplyListRelationFilter } from "../reply/ReplyListRelationFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type QuestionWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  replies?: ReplyListRelationFilter;
  questionContent?: StringFilter;
  isPublic?: BooleanFilter;
};
