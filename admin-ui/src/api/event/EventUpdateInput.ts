import { InputJsonValue } from "../../types";
import { MessageUpdateManyWithoutEventsInput } from "./MessageUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  eventTime?: Date;
  eventType?: string;
  eventName?: string;
  eventParam?: InputJsonValue;
  relateUser?: InputJsonValue;
  messageNotifies?: MessageUpdateManyWithoutEventsInput;
};
