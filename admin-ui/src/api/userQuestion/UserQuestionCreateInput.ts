import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReplyQuestionCreateNestedManyWithoutUserQuestionsInput } from "./ReplyQuestionCreateNestedManyWithoutUserQuestionsInput";

export type UserQuestionCreateInput = {
  questionTime: Date;
  questionTitle: string;
  questionContent?: string | null;
  isPublic: string;
  user?: UserWhereUniqueInput | null;
  replyQuestions?: ReplyQuestionCreateNestedManyWithoutUserQuestionsInput;
};
