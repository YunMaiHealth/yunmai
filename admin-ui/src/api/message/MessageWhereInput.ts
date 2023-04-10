import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageWhereInput = {
  id?: StringFilter;
  isNew?: BooleanFilter;
  messageContent?: JsonFilter;
  messageType?: StringFilter;
  messageSource?: StringFilter;
  event?: EventWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
