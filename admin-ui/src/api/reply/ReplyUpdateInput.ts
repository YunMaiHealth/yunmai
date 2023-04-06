import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ReplyUpdateInput = {
  replyTime?: Date;
  questionReply?: string;
  isPublic?: string;
  replyUser?: UserWhereUniqueInput;
  userQuestion?: QuestionWhereUniqueInput | null;
};
