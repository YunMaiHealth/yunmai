import { JsonValue } from "type-fest";
import { Event } from "../event/Event";
import { User } from "../user/User";

export type Message = {
  id: string;
  sendTime: Date;
  isNew: boolean;
  messageContent: JsonValue;
  messageType: string;
  messageSource: string;
  event?: Event | null;
  user?: User | null;
};
