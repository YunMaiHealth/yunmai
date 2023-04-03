import { EventLog } from "../eventLog/EventLog";
import { User } from "../user/User";

export type MessageNotify = {
  event?: EventLog | null;
  id: string;
  isNew: boolean;
  messageContent: string;
  messageSource: string;
  messageType: string;
  sendTime: Date;
  user?: User | null;
};
