import { SortOrder } from "../../util/SortOrder";

export type UserStatusOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
};
