import { User } from "../user/User";
import { EventLog } from "../eventLog/EventLog";

export type MessageNotify = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  eventLog?: EventLog | null;
};
