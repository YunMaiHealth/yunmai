import { Question } from "../question/Question";

export type Reply = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  question?: Question | null;
};
