import { SortOrder } from "../../util/SortOrder";

export type UserQuestionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
