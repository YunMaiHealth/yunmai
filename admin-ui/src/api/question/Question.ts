import { User } from "../user/User";
import { Reply } from "../reply/Reply";

export type Question = {
  id: string;
  questionTime: Date;
  questionTitle: string;
  questionContent: string | null;
  isPublic: string;
  user?: User | null;
  replyQuestions?: Array<Reply>;
};
