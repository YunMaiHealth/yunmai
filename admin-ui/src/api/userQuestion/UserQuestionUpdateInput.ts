import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReplyQuestionUpdateManyWithoutUserQuestionsInput } from "./ReplyQuestionUpdateManyWithoutUserQuestionsInput";

export type UserQuestionUpdateInput = {
  questionTime?: Date;
  questionTitle?: string;
  questionContent?: string | null;
  isPublic?: string;
  user?: UserWhereUniqueInput | null;
  replyQuestions?: ReplyQuestionUpdateManyWithoutUserQuestionsInput;
};
