import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserQuestionWhereInput = {
  id?: StringFilter;
  questionTitle?: StringNullableFilter;
  questionContent?: StringNullableFilter;
  isPublic?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
