import { User } from "../user/User";
import { Event } from "../event/Event";
import { JsonValue } from "type-fest";

export type Message = {
  id: string;
  sendTime: Date;
  user?: User | null;
  event?: Event | null;
  isRead: boolean;
  messageContent: JsonValue;
  messageType?:
    | "FollowFriend"
    | "HealthCheck"
    | "UpdateMetaGas"
    | "RegisterNewUser"
    | "ReferNewUser"
    | "HealthInquiry";
  messageSource: string;
};
