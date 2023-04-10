import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReplyCreateNestedManyWithoutQuestionsInput } from "./ReplyCreateNestedManyWithoutQuestionsInput";

export type QuestionCreateInput = {
  questionTime: Date;
  questionContent: string;
  isPublic: boolean;
  user?: UserWhereUniqueInput | null;
  replyQuestions?: ReplyCreateNestedManyWithoutQuestionsInput;
};
