import { SortOrder } from "../../util/SortOrder";

export type MessageNotifyOrderByInput = {
  eventId?: SortOrder;
  id?: SortOrder;
  isNew?: SortOrder;
  messageContent?: SortOrder;
  messageSource?: SortOrder;
  messageType?: SortOrder;
  sendTime?: SortOrder;
  userId?: SortOrder;
};
