import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type EventWhereInput = {
  id?: StringFilter;
  eventType?: StringFilter;
  eventName?: StringNullableFilter;
  eventParam?: JsonFilter;
  relateUser?: JsonFilter;
  messageNotifies?: MessageListRelationFilter;
};
