import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { EventLogWhereUniqueInput } from "../eventLog/EventLogWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageNotifyWhereInput = {
  messageSource?: StringFilter;
  id?: StringFilter;
  isNew?: BooleanFilter;
  messageContent?: StringFilter;
  messageType?: StringFilter;
  event?: EventLogWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
