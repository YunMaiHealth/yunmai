import { JsonValue } from "type-fest";
import { Message } from "../message/Message";

export type Event = {
  id: string;
  eventTime: Date;
  eventType: string;
  eventName: string;
  eventParam: JsonValue;
  relateUser: JsonValue;
  messageNotifies?: Array<Message>;
};
