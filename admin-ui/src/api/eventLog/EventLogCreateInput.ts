import { MessageNotifyWhereUniqueInput } from "../messageNotify/MessageNotifyWhereUniqueInput";

export type EventLogCreateInput = {
  eventTime: Date;
  messageNotifies?: MessageNotifyWhereUniqueInput | null;
};
