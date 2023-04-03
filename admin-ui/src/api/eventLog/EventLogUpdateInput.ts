import { InputJsonValue } from "../../types";
import { MessageNotifyUpdateManyWithoutEventLogsInput } from "./MessageNotifyUpdateManyWithoutEventLogsInput";

export type EventLogUpdateInput = {
  eventTime?: Date;
  eventType?: string;
  eventName?: string | null;
  eventParam?: InputJsonValue;
  relateUser?: InputJsonValue;
  messageNotifies?: MessageNotifyUpdateManyWithoutEventLogsInput;
};
