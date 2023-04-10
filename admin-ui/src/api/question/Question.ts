import { User } from "../user/User";
import { Reply } from "../reply/Reply";

export type Question = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  replies?: Array<Reply>;
};
