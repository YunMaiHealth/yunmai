import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type EventWhereInput = {
  id?: StringFilter;
  eventType?: StringFilter;
  eventName?: StringFilter;
  eventParam?: JsonFilter;
  relateUser?: JsonFilter;
  messageNotifies?: MessageListRelationFilter;
};
