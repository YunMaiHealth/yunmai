import { StringFilter } from "../../util/StringFilter";
import { QuestionWhereUniqueInput } from "../question/QuestionWhereUniqueInput";

export type ReplyWhereInput = {
  id?: StringFilter;
  question?: QuestionWhereUniqueInput;
};
