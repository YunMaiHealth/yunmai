import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReplyCreateNestedManyWithoutQuestionsInput } from "./ReplyCreateNestedManyWithoutQuestionsInput";

export type QuestionCreateInput = {
  questionTime: Date;
  questionTitle: string;
  questionContent?: string | null;
  isPublic: string;
  user?: UserWhereUniqueInput | null;
  replyQuestions?: ReplyCreateNestedManyWithoutQuestionsInput;
};
