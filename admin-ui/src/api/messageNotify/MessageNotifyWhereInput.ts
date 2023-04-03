import { EventLogWhereUniqueInput } from "../eventLog/EventLogWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageNotifyWhereInput = {
  event?: EventLogWhereUniqueInput;
  id?: StringFilter;
  isNew?: BooleanFilter;
  messageContent?: StringFilter;
  messageSource?: StringFilter;
  messageType?: StringFilter;
  user?: UserWhereUniqueInput;
};
