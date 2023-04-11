import { Question } from "../question/Question";

export type Reply = {
  id: string;
  replyTime: Date;
  question?: Question;
  questionReply: string;
  replyUserId: string | null;
  isPublic: boolean;
};
