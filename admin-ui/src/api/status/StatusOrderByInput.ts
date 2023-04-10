import { SortOrder } from "../../util/SortOrder";

export type StatusOrderByInput = {
  id?: SortOrder;
  updateTime?: SortOrder;
  status?: SortOrder;
  intValue?: SortOrder;
  doubleValue?: SortOrder;
  stringValue?: SortOrder;
  dateValue?: SortOrder;
  jsonValue?: SortOrder;
  streamId?: SortOrder;
  userId?: SortOrder;
};
