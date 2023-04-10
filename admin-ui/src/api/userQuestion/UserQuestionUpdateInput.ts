import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReplyQuestionUpdateManyWithoutUserQuestionsInput } from "./ReplyQuestionUpdateManyWithoutUserQuestionsInput";

export type UserQuestionUpdateInput = {
  user?: UserWhereUniqueInput | null;
  replyQuestions?: ReplyQuestionUpdateManyWithoutUserQuestionsInput;
};
