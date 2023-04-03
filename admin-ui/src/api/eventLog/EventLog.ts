import { JsonValue } from "type-fest";
import { MessageNotify } from "../messageNotify/MessageNotify";

export type EventLog = {
  eventName: string | null;
  eventParam: JsonValue;
  eventTime: Date;
  eventType: string;
  id: string;
  messageNotifies?: Array<MessageNotify>;
  relateUser: JsonValue;
};
