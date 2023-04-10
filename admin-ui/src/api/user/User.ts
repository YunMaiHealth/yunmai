import { JsonValue } from "type-fest";
import { UserQuestion } from "../userQuestion/UserQuestion";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: JsonValue;
  userQuestions?: Array<UserQuestion>;
};
