import { User } from "../user/User";
import { EventLog } from "../eventLog/EventLog";

export type MessageNotify = {
  id: string;
  sendTime: Date;
  updatedAt: Date;
  messageSource: string | null;
  user?: User | null;
  eventLogs?: Array<EventLog>;
};
