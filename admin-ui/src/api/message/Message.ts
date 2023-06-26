import { User } from "../user/User";
import { JsonValue } from "type-fest";
import { Event } from "../event/Event";

export type Message = {
  id: string;
  sendTime: Date;
  user?: User | null;
  messageSource: string;
  isRead: boolean;
  messageContent: JsonValue;
  event?: Event | null;
  messageType?:
    | "FOLLOW_FRIEND"
    | "HEALTH_CHECK"
    | "UPDATE_HEALTH"
    | "REGISTER_NEWUSER"
    | "REFER_NEWUSER"
    | "HEALTH_INQUIRY";
  messageAction: string;
};
