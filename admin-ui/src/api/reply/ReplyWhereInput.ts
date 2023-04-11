import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type ReplyWhereInput = {
  id?: StringFilter;
  question?: QuestionWhereUniqueInput;
  questionReply?: StringFilter;
  replyUserId?: StringNullableFilter;
  isPublic?: BooleanFilter;
};
