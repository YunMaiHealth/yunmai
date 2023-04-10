import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventLogListRelationFilter } from "../eventLog/EventLogListRelationFilter";

export type MessageNotifyWhereInput = {
  id?: StringFilter;
  messageSource?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  eventLogs?: EventLogListRelationFilter;
};
