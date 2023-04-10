import { InputJsonValue } from "../../types";
import { MessageCreateNestedManyWithoutEventsInput } from "./MessageCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  eventTime: Date;
  eventType: string;
  eventName: string;
  eventParam?: InputJsonValue;
  relateUser?: InputJsonValue;
  messageNotifies?: MessageCreateNestedManyWithoutEventsInput;
};
