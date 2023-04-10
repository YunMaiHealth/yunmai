import { MessageCreateNestedManyWithoutEventsInput } from "./MessageCreateNestedManyWithoutEventsInput";

export type EventCreateInput = {
  messages?: MessageCreateNestedManyWithoutEventsInput;
};
