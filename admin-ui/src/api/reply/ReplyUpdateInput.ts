import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ReplyUpdateInput = {
  replyTime?: Date;
  questionReply?: string;
  isPublic?: boolean;
  replyUser?: UserWhereUniqueInput;
  userQuestion?: QuestionWhereUniqueInput | null;
};
