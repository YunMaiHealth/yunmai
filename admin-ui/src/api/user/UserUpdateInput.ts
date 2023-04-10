import { InputJsonValue } from "../../types";
import { UserQuestionUpdateManyWithoutUsersInput } from "./UserQuestionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  userQuestions?: UserQuestionUpdateManyWithoutUsersInput;
};
