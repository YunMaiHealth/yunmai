import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReplyUpdateManyWithoutQuestionsInput } from "./ReplyUpdateManyWithoutQuestionsInput";

export type QuestionUpdateInput = {
  user?: UserWhereUniqueInput | null;
  replies?: ReplyUpdateManyWithoutQuestionsInput;
};
