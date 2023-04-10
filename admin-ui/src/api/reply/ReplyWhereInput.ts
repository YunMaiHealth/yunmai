import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ReplyWhereInput = {
  id?: StringFilter;
  questionReply?: StringFilter;
  isPublic?: BooleanFilter;
  replyUser?: UserWhereUniqueInput;
  userQuestion?: QuestionWhereUniqueInput;
};
