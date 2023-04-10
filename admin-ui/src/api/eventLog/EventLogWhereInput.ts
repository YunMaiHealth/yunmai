import { StringFilter } from "../../util/StringFilter";
import { MessageNotifyListRelationFilter } from "../messageNotify/MessageNotifyListRelationFilter";

export type EventLogWhereInput = {
  id?: StringFilter;
  messageNotifies?: MessageNotifyListRelationFilter;
};
