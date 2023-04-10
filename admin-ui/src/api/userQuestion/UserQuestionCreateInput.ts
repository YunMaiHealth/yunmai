import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserQuestionCreateInput = {
  questionTime: Date;
  questionTitle?: string | null;
  questionContent?: string | null;
  isPublic?: string | null;
  user?: UserWhereUniqueInput | null;
};
