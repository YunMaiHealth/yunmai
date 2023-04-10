import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReplyCreateNestedManyWithoutQuestionsInput } from "./ReplyCreateNestedManyWithoutQuestionsInput";

export type QuestionCreateInput = {
  user?: UserWhereUniqueInput | null;
  replies?: ReplyCreateNestedManyWithoutQuestionsInput;
};
