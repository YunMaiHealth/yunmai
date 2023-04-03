import { SortOrder } from "../../util/SortOrder";

export type EventLogOrderByInput = {
  eventName?: SortOrder;
  eventParam?: SortOrder;
  eventTime?: SortOrder;
  eventType?: SortOrder;
  id?: SortOrder;
  relateUser?: SortOrder;
};
