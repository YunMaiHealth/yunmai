import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserQuestionWhereUniqueInput } from "../userQuestion/UserQuestionWhereUniqueInput";

export type ReplyQuestionWhereInput = {
  id?: StringFilter;
  questionReply?: StringFilter;
  isPublic?: StringFilter;
  replyUser?: UserWhereUniqueInput;
  userQuestion?: UserQuestionWhereUniqueInput;
};
