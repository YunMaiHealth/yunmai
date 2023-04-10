import { MessageNotify } from "../messageNotify/MessageNotify";

export type EventLog = {
  id: string;
  eventTime: Date;
  messageNotifies?: MessageNotify | null;
};
