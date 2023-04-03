import { SortOrder } from "../../util/SortOrder";

export type UserStatusOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updateTime?: SortOrder;
  status?: SortOrder;
  intValue?: SortOrder;
  doubleValue?: SortOrder;
  stringValue?: SortOrder;
  dateValue?: SortOrder;
  jsonValue?: SortOrder;
  blobValue?: SortOrder;
  streamId?: SortOrder;
  userId?: SortOrder;
};
