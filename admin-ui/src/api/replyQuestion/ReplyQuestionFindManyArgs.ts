import { ReplyQuestionWhereInput } from "./ReplyQuestionWhereInput";
import { ReplyQuestionOrderByInput } from "./ReplyQuestionOrderByInput";

export type ReplyQuestionFindManyArgs = {
  where?: ReplyQuestionWhereInput;
  orderBy?: Array<ReplyQuestionOrderByInput>;
  skip?: number;
  take?: number;
};
