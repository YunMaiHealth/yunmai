import { UserQuestionWhereInput } from "./UserQuestionWhereInput";
import { UserQuestionOrderByInput } from "./UserQuestionOrderByInput";

export type UserQuestionFindManyArgs = {
  where?: UserQuestionWhereInput;
  orderBy?: Array<UserQuestionOrderByInput>;
  skip?: number;
  take?: number;
};
