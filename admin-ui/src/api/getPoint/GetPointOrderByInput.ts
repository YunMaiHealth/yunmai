import { SortOrder } from "../../util/SortOrder";

export type GetPointOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
