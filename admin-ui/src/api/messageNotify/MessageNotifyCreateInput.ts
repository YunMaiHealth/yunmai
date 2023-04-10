import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventLogWhereUniqueInput } from "../eventLog/EventLogWhereUniqueInput";

export type MessageNotifyCreateInput = {
  user?: UserWhereUniqueInput | null;
  eventLog?: EventLogWhereUniqueInput | null;
};
