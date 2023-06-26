import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { BooleanFilter } from "../../util/BooleanFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type MessageWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  messageSource?: StringFilter;
  isRead?: BooleanFilter;
  messageContent?: JsonFilter;
  event?: EventWhereUniqueInput;
  messageType?:
    | "FOLLOW_FRIEND"
    | "HEALTH_CHECK"
    | "UPDATE_HEALTH"
    | "REGISTER_NEWUSER"
    | "REFER_NEWUSER"
    | "HEALTH_INQUIRY";
  messageAction?: StringFilter;
};
