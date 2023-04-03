import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { UserQuestionWhereUniqueInput } from "../userQuestion/UserQuestionWhereUniqueInput";

export type ReplyQuestionUpdateInput = {
  replyTime?: Date;
  questionReply?: string;
  isPublic?: string;
  replyUser?: UserWhereUniqueInput;
  userQuestion?: UserQuestionWhereUniqueInput | null;
};
