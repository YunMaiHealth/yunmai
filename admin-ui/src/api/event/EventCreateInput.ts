import { MessageCreateNestedManyWithoutEventsInput } from "./MessageCreateNestedManyWithoutEventsInput";
import { InputJsonValue } from "../../types";

export type EventCreateInput = {
  eventTime: Date;
  messages?: MessageCreateNestedManyWithoutEventsInput;
  eventType: string;
  eventName: string;
  eventParam?: InputJsonValue;
  relateUser?: InputJsonValue;
};
