import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { BooleanFilter } from "../../util/BooleanFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type MessageWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  event?: EventWhereUniqueInput;
  isRead?: BooleanFilter;
  messageContent?: JsonFilter;
  messageType?:
    | "FOLLOW_FRIEND"
    | "HEALTH_CHECK"
    | "UPDATE_HEALTH"
    | "REGISTER_NEWUSER"
    | "REFER_NEWUSER"
    | "HEALTH_INQUIRY";
  messageSource?: StringFilter;
  action?: StringFilter;
};
