import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventLogCreateNestedManyWithoutMessageNotifiesInput } from "./EventLogCreateNestedManyWithoutMessageNotifiesInput";

export type MessageNotifyCreateInput = {
  sendTime: Date;
  messageSource?: string | null;
  user?: UserWhereUniqueInput | null;
  eventLogs?: EventLogCreateNestedManyWithoutMessageNotifiesInput;
};
