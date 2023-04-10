import { MessageNotifyWhereUniqueInput } from "../messageNotify/MessageNotifyWhereUniqueInput";

export type EventLogUpdateInput = {
  eventTime?: Date;
  messageNotifies?: MessageNotifyWhereUniqueInput | null;
};
