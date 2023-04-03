import { JsonValue } from "type-fest";
import { MessageNotify } from "../messageNotify/MessageNotify";

export type EventLog = {
  id: string;
  eventTime: Date;
  eventType: string;
  eventName: string | null;
  eventParam: JsonValue;
  relateUser: JsonValue;
  messageNotifies?: Array<MessageNotify>;
};
