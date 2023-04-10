import { EventLogWhereUniqueInput } from "./EventLogWhereUniqueInput";
import { EventLogUpdateInput } from "./EventLogUpdateInput";

export type UpdateEventLogArgs = {
  where: EventLogWhereUniqueInput;
  data: EventLogUpdateInput;
};
