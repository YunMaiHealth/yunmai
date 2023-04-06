import { ReplyWhereInput } from "./ReplyWhereInput";
import { ReplyOrderByInput } from "./ReplyOrderByInput";

export type ReplyFindManyArgs = {
  where?: ReplyWhereInput;
  orderBy?: Array<ReplyOrderByInput>;
  skip?: number;
  take?: number;
};
