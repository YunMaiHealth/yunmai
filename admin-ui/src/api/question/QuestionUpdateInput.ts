import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReplyUpdateManyWithoutQuestionsInput } from "./ReplyUpdateManyWithoutQuestionsInput";

export type QuestionUpdateInput = {
  questionTime?: Date;
  questionContent?: string;
  isPublic?: boolean;
  user?: UserWhereUniqueInput | null;
  replyQuestions?: ReplyUpdateManyWithoutQuestionsInput;
};
