import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReplyQuestionCreateNestedManyWithoutUserQuestionsInput } from "./ReplyQuestionCreateNestedManyWithoutUserQuestionsInput";

export type UserQuestionCreateInput = {
  user?: UserWhereUniqueInput | null;
  replyQuestions?: ReplyQuestionCreateNestedManyWithoutUserQuestionsInput;
};
