import { Message } from "../message/Message";
import { JsonValue } from "type-fest";

export type Event = {
  id: string;
  eventTime: Date;
  messages?: Array<Message>;
  eventType: string;
  eventName: string;
  eventParam: JsonValue;
  relateUser: JsonValue;
};
