import { User } from "../user/User";
import { Reply } from "../reply/Reply";

export type Question = {
  id: string;
  questionTime: Date;
  questionContent: string;
  isPublic: boolean;
  user?: User | null;
  replyQuestions?: Array<Reply>;
};
