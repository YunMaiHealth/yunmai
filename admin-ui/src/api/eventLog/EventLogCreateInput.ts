import { InputJsonValue } from "../../types";
import { MessageNotifyCreateNestedManyWithoutEventLogsInput } from "./MessageNotifyCreateNestedManyWithoutEventLogsInput";

export type EventLogCreateInput = {
  eventName?: string | null;
  eventParam?: InputJsonValue;
  eventTime: Date;
  eventType: string;
  messageNotifies?: MessageNotifyCreateNestedManyWithoutEventLogsInput;
  relateUser?: InputJsonValue;
};
