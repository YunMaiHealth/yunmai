import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  id?: SortOrder;
  sendTime?: SortOrder;
  isNew?: SortOrder;
  messageContent?: SortOrder;
  messageType?: SortOrder;
  messageSource?: SortOrder;
  eventId?: SortOrder;
  userId?: SortOrder;
};
