import { SortOrder } from "../../util/SortOrder";

export type ReplyOrderByInput = {
  id?: SortOrder;
  replyTime?: SortOrder;
  questionId?: SortOrder;
  questionReply?: SortOrder;
  replyUserId?: SortOrder;
  isPublic?: SortOrder;
};
