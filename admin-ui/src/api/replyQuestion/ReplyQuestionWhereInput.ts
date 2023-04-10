import { StringFilter } from "../../util/StringFilter";
import { UserQuestionWhereUniqueInput } from "../userQuestion/UserQuestionWhereUniqueInput";

export type ReplyQuestionWhereInput = {
  id?: StringFilter;
  userQuestion?: UserQuestionWhereUniqueInput;
};
