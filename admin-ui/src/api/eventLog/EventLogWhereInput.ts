import { StringFilter } from "../../util/StringFilter";
import { MessageNotifyWhereUniqueInput } from "../messageNotify/MessageNotifyWhereUniqueInput";

export type EventLogWhereInput = {
  id?: StringFilter;
  messageNotifies?: MessageNotifyWhereUniqueInput;
};
