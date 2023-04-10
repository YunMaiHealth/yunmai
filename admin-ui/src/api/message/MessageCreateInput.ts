import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type MessageCreateInput = {
  user?: UserWhereUniqueInput | null;
  event?: EventWhereUniqueInput | null;
};
