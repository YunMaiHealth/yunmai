import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ReplyWhereInput = {
  id?: StringFilter;
  questionReply?: StringFilter;
  isPublic?: StringFilter;
  replyUser?: UserWhereUniqueInput;
  userQuestion?: QuestionWhereUniqueInput;
};
