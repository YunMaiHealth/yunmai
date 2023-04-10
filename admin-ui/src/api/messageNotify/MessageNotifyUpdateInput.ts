import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventLogUpdateManyWithoutMessageNotifiesInput } from "./EventLogUpdateManyWithoutMessageNotifiesInput";

export type MessageNotifyUpdateInput = {
  sendTime?: Date;
  messageSource?: string | null;
  user?: UserWhereUniqueInput | null;
  eventLogs?: EventLogUpdateManyWithoutMessageNotifiesInput;
};
