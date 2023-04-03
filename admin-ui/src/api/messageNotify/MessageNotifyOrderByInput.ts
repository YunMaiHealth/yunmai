import { SortOrder } from "../../util/SortOrder";

export type MessageNotifyOrderByInput = {
  messageSource?: SortOrder;
  id?: SortOrder;
  sendTime?: SortOrder;
  isNew?: SortOrder;
  messageContent?: SortOrder;
  messageType?: SortOrder;
  eventId?: SortOrder;
  userId?: SortOrder;
};
