import { EventLogWhereInput } from "./EventLogWhereInput";
import { EventLogOrderByInput } from "./EventLogOrderByInput";

export type EventLogFindManyArgs = {
  where?: EventLogWhereInput;
  orderBy?: Array<EventLogOrderByInput>;
  skip?: number;
  take?: number;
};
