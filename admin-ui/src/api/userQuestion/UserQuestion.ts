import { User } from "../user/User";
import { ReplyQuestion } from "../replyQuestion/ReplyQuestion";

export type UserQuestion = {
  id: string;
  questionTime: Date;
  questionTitle: string;
  questionContent: string | null;
  isPublic: string;
  user?: User | null;
  replyQuestions?: Array<ReplyQuestion>;
};
