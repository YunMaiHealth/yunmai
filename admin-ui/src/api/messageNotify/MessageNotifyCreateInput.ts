import { EventLogWhereUniqueInput } from "../eventLog/EventLogWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageNotifyCreateInput = {
  event?: EventLogWhereUniqueInput | null;
  isNew: boolean;
  messageContent: string;
  messageSource: string;
  messageType: string;
  sendTime: Date;
  user?: UserWhereUniqueInput | null;
};
