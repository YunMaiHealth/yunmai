import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type MessageUpdateInput = {
  sendTime?: Date;
  user?: UserWhereUniqueInput | null;
  event?: EventWhereUniqueInput | null;
  isRead?: boolean;
  messageContent?: InputJsonValue;
  messageType?:
    | "FollowFriend"
    | "HealthCheck"
    | "UpdateMetaGas"
    | "RegisterNewUser"
    | "ReferNewUser"
    | "HealthInquiry";
  messageSource?: string;
};
