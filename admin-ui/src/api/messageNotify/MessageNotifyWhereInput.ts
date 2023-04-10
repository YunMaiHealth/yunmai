import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventLogWhereUniqueInput } from "../eventLog/EventLogWhereUniqueInput";

export type MessageNotifyWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  eventLog?: EventLogWhereUniqueInput;
};
