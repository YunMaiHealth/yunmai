import { User } from "../user/User";

export type UserQuestion = {
  id: string;
  questionTime: Date;
  questionTitle: string | null;
  questionContent: string | null;
  isPublic: string | null;
  user?: User | null;
};
