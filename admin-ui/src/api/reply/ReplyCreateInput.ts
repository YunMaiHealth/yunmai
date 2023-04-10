import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ReplyCreateInput = {
  question?: QuestionWhereUniqueInput | null;
};
