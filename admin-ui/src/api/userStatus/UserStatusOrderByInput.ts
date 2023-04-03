import { SortOrder } from "../../util/SortOrder";

export type UserStatusOrderByInput = {
  id?: SortOrder;
  status?: SortOrder;
  intValue?: SortOrder;
  doubleValue?: SortOrder;
  stringValue?: SortOrder;
  dateValue?: SortOrder;
  jsonValue?: SortOrder;
  blobValue?: SortOrder;
  updateTime?: SortOrder;
  streamId?: SortOrder;
  userId?: SortOrder;
};
