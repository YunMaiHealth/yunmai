import { SortOrder } from "../../util/SortOrder";

export type EventLogOrderByInput = {
  id?: SortOrder;
  eventTime?: SortOrder;
  updatedAt?: SortOrder;
  eventType?: SortOrder;
  eventName?: SortOrder;
  eventParam?: SortOrder;
  relateUser?: SortOrder;
};
