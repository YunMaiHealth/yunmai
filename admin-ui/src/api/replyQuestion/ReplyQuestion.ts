import { User } from "../user/User";
import { UserQuestion } from "../userQuestion/UserQuestion";

export type ReplyQuestion = {
  id: string;
  replyTime: Date;
  questionReply: string;
  isPublic: string;
  replyUser?: User;
  userQuestion?: UserQuestion | null;
};
