import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReplyUpdateManyWithoutQuestionsInput } from "./ReplyUpdateManyWithoutQuestionsInput";

export type QuestionUpdateInput = {
  questionTime?: Date;
  questionTitle?: string;
  questionContent?: string | null;
  isPublic?: string;
  user?: UserWhereUniqueInput | null;
  replyQuestions?: ReplyUpdateManyWithoutQuestionsInput;
};
