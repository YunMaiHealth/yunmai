import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ReplyUpdateManyWithoutQuestionsInput } from "./ReplyUpdateManyWithoutQuestionsInput";

export type QuestionUpdateInput = {
  questionTime?: Date;
  user?: UserWhereUniqueInput | null;
  replies?: ReplyUpdateManyWithoutQuestionsInput;
  questionContent?: string;
  isPublic?: boolean;
};
