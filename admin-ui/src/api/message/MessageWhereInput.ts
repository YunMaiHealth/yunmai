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
    | "FollowFriend"
    | "HealthCheck"
    | "UpdateMetaGas"
    | "RegisterNewUser"
    | "ReferNewUser"
    | "HealthInquiry";
  messageSource?: StringFilter;
};
