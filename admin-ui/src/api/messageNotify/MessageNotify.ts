import { EventLog } from "../eventLog/EventLog";
import { User } from "../user/User";

export type MessageNotify = {
  messageSource: string;
  id: string;
  sendTime: Date;
  isNew: boolean;
  messageContent: string;
  messageType: string;
  event?: EventLog | null;
  user?: User | null;
};
