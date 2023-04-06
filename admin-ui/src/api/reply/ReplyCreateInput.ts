import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ReplyCreateInput = {
  replyTime: Date;
  questionReply: string;
  isPublic: string;
  replyUser: UserWhereUniqueInput;
  userQuestion?: QuestionWhereUniqueInput | null;
};
