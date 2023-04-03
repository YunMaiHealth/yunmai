import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { MessageNotifyListRelationFilter } from "../messageNotify/MessageNotifyListRelationFilter";

export type EventLogWhereInput = {
  eventName?: StringNullableFilter;
  eventParam?: JsonFilter;
  eventType?: StringFilter;
  id?: StringFilter;
  messageNotifies?: MessageNotifyListRelationFilter;
  relateUser?: JsonFilter;
};
