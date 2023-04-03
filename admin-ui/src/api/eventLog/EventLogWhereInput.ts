import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type EventLogWhereInput = {
  id?: StringFilter;
  eventType?: StringFilter;
  eventName?: StringNullableFilter;
  eventParam?: JsonFilter;
  relateUser?: JsonFilter;
};