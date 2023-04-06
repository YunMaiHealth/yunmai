import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageWhereInput = {
  id?: StringFilter;
  isNew?: BooleanFilter;
  messageContent?: StringFilter;
  messageType?: StringFilter;
  messageSource?: StringFilter;
  event?: EventWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
