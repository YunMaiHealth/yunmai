import { User } from "../user/User";
import { Question } from "../question/Question";

export type Reply = {
  id: string;
  replyTime: Date;
  questionReply: string;
  isPublic: string;
  replyUser?: User;
  userQuestion?: Question | null;
};
