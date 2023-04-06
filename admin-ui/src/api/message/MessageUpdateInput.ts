import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageUpdateInput = {
  sendTime?: Date;
  isNew?: boolean;
  messageContent?: string;
  messageType?: string;
  messageSource?: string;
  event?: EventWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
