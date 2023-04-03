import { InputJsonValue } from "../../types";

export type EventLogCreateInput = {
  eventTime: Date;
  eventType: string;
  eventName?: string | null;
  eventParam?: InputJsonValue;
  relateUser?: InputJsonValue;
};
