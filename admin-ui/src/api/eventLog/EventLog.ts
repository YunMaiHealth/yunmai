import { MessageNotify } from "../messageNotify/MessageNotify";

export type EventLog = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  messageNotifies?: Array<MessageNotify>;
};
