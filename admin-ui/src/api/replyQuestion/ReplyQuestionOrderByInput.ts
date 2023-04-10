import { SortOrder } from "../../util/SortOrder";

export type ReplyQuestionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userQuestionId?: SortOrder;
};
