import { SortOrder } from "../../util/SortOrder";

export type ReplyOrderByInput = {
  id?: SortOrder;
  replyTime?: SortOrder;
  questionReply?: SortOrder;
  isPublic?: SortOrder;
  replyUserId?: SortOrder;
  userQuestionId?: SortOrder;
};
