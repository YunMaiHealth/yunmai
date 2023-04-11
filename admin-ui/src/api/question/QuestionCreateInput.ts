import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReplyCreateNestedManyWithoutQuestionsInput } from "./ReplyCreateNestedManyWithoutQuestionsInput";

export type QuestionCreateInput = {
  questionTime: Date;
  user?: UserWhereUniqueInput | null;
  replies?: ReplyCreateNestedManyWithoutQuestionsInput;
  questionContent: string;
  isPublic: boolean;
};
