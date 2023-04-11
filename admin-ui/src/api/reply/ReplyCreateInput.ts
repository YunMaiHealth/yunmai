import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ReplyCreateInput = {
  replyTime: Date;
  question: QuestionWhereUniqueInput;
  questionReply: string;
  replyUserId?: string | null;
  isPublic: boolean;
};
