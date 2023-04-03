import { JsonValue } from "type-fest";

export type EventLog = {
  id: string;
  eventTime: Date;
  updatedAt: Date;
  eventType: string;
  eventName: string | null;
  eventParam: JsonValue;
  relateUser: JsonValue;
};
