import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  id?: SortOrder;
  eventTime?: SortOrder;
  eventType?: SortOrder;
  eventName?: SortOrder;
  eventParam?: SortOrder;
  relateUser?: SortOrder;
};
