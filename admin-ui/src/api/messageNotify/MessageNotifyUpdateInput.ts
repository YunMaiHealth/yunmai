import { EventLogWhereUniqueInput } from "../eventLog/EventLogWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageNotifyUpdateInput = {
  messageSource?: string;
  sendTime?: Date;
  isNew?: boolean;
  messageContent?: string;
  messageType?: string;
  event?: EventLogWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
