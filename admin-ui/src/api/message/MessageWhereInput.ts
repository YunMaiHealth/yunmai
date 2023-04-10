import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type MessageWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  event?: EventWhereUniqueInput;
};
