import { InputJsonValue } from "../../types";
import { MessageNotifyUpdateManyWithoutEventLogsInput } from "./MessageNotifyUpdateManyWithoutEventLogsInput";

export type EventLogUpdateInput = {
  eventName?: string | null;
  eventParam?: InputJsonValue;
  eventTime?: Date;
  eventType?: string;
  messageNotifies?: MessageNotifyUpdateManyWithoutEventLogsInput;
  relateUser?: InputJsonValue;
};
