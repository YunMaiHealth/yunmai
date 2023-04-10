import { UserQuestion } from "../userQuestion/UserQuestion";

export type ReplyQuestion = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userQuestion?: UserQuestion | null;
};
