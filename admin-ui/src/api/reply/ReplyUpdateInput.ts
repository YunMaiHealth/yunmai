import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ReplyUpdateInput = {
  replyTime?: Date;
  question?: QuestionWhereUniqueInput;
  questionReply?: string;
  replyUserId?: string | null;
  isPublic?: boolean;
};
