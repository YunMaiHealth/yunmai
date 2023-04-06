import { InputJsonValue } from "../../types";
import { MessageUpdateManyWithoutEventsInput } from "./MessageUpdateManyWithoutEventsInput";

export type EventUpdateInput = {
  eventTime?: Date;
  eventType?: string;
  eventName?: string | null;
  eventParam?: InputJsonValue;
  relateUser?: InputJsonValue;
  messageNotifies?: MessageUpdateManyWithoutEventsInput;
};
