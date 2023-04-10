import { InputJsonValue } from "../../types";
import { UserQuestionCreateNestedManyWithoutUsersInput } from "./UserQuestionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  userQuestions?: UserQuestionCreateNestedManyWithoutUsersInput;
};
