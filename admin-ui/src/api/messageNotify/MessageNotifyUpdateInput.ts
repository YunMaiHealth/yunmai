import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventLogWhereUniqueInput } from "../eventLog/EventLogWhereUniqueInput";

export type MessageNotifyUpdateInput = {
  user?: UserWhereUniqueInput | null;
  eventLog?: EventLogWhereUniqueInput | null;
};
