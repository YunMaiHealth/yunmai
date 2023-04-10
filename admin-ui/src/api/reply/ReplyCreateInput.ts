import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ReplyCreateInput = {
  replyTime: Date;
  questionReply: string;
  isPublic: boolean;
  replyUser: UserWhereUniqueInput;
  userQuestion?: QuestionWhereUniqueInput | null;
};
