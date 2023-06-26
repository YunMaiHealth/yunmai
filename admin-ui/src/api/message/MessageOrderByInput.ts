import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  id?: SortOrder;
  sendTime?: SortOrder;
  userId?: SortOrder;
  messageSource?: SortOrder;
  isRead?: SortOrder;
  messageContent?: SortOrder;
  eventId?: SortOrder;
  messageType?: SortOrder;
  messageAction?: SortOrder;
};
