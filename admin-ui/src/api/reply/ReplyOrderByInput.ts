import { SortOrder } from "../../util/SortOrder";

export type ReplyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  questionId?: SortOrder;
};
