import { InputJsonValue } from "../../types";
import { MessageCreateNestedManyWithoutEventsInput } from "./MessageCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  eventTime: Date;
  eventType: string;
  eventName?: string | null;
  eventParam?: InputJsonValue;
  relateUser?: InputJsonValue;
  messageNotifies?: MessageCreateNestedManyWithoutEventsInput;
};
