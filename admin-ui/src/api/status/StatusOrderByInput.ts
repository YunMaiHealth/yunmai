import { SortOrder } from "../../util/SortOrder";

export type StatusOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
