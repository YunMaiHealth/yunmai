import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  id?: SortOrder;
  sendTime?: SortOrder;
  userId?: SortOrder;
  eventId?: SortOrder;
  isRead?: SortOrder;
  messageContent?: SortOrder;
  messageType?: SortOrder;
  messageSource?: SortOrder;
};
