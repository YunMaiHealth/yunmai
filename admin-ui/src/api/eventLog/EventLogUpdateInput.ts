import { InputJsonValue } from "../../types";

export type EventLogUpdateInput = {
  eventTime?: Date;
  eventType?: string;
  eventName?: string | null;
  eventParam?: InputJsonValue;
  relateUser?: InputJsonValue;
};
