import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type EventWhereInput = {
  id?: StringFilter;
  messages?: MessageListRelationFilter;
};
