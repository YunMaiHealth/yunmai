import { User } from "../user/User";
import { ReplyQuestion } from "../replyQuestion/ReplyQuestion";

export type UserQuestion = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  replyQuestions?: Array<ReplyQuestion>;
};
