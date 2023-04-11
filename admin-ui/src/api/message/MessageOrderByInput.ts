import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  id?: SortOrder;
  sendTime?: SortOrder;
  userId?: SortOrder;
  eventId?: SortOrder;
  isNew?: SortOrder;
  messageContent?: SortOrder;
  messageType?: SortOrder;
  messageSource?: SortOrder;
};
