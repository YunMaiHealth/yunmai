import { SortOrder } from "../../util/SortOrder";

export type MessageNotifyOrderByInput = {
  id?: SortOrder;
  sendTime?: SortOrder;
  updatedAt?: SortOrder;
  messageSource?: SortOrder;
  userId?: SortOrder;
};
