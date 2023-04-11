import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type EventWhereInput = {
  id?: StringFilter;
  messages?: MessageListRelationFilter;
  eventType?: StringFilter;
  eventName?: StringFilter;
  eventParam?: JsonFilter;
  relateUser?: JsonFilter;
};
