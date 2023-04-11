import { User } from "../user/User";
import { Reply } from "../reply/Reply";

export type Question = {
  id: string;
  questionTime: Date;
  user?: User | null;
  replies?: Array<Reply>;
  questionContent: string;
  isPublic: boolean;
};
