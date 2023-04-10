import { SortOrder } from "../../util/SortOrder";

export type EventLogOrderByInput = {
  id?: SortOrder;
  eventTime?: SortOrder;
  messageNotifiesId?: SortOrder;
};
