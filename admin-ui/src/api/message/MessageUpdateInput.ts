import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type MessageUpdateInput = {
  user?: UserWhereUniqueInput | null;
  event?: EventWhereUniqueInput | null;
};
