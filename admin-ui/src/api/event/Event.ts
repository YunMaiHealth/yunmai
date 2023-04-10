import { Message } from "../message/Message";

export type Event = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  messages?: Array<Message>;
};
