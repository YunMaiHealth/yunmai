import { InputJsonValue } from "../../types";
import { MessageNotifyCreateNestedManyWithoutEventLogsInput } from "./MessageNotifyCreateNestedManyWithoutEventLogsInput";

export type EventLogCreateInput = {
  eventTime: Date;
  eventType: string;
  eventName?: string | null;
  eventParam?: InputJsonValue;
  relateUser?: InputJsonValue;
  messageNotifies?: MessageNotifyCreateNestedManyWithoutEventLogsInput;
};
