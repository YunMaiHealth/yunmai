import { MessageUpdateManyWithoutEventsInput } from "./MessageUpdateManyWithoutEventsInput";
import { InputJsonValue } from "../../types";

export type EventUpdateInput = {
  eventTime?: Date;
  messages?: MessageUpdateManyWithoutEventsInput;
  eventType?: string;
  eventName?: string;
  eventParam?: InputJsonValue;
  relateUser?: InputJsonValue;
};
