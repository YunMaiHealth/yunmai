import { JsonValue } from "type-fest";
import { MessageNotify } from "../messageNotify/MessageNotify";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: JsonValue;
  messageNotifies?: Array<MessageNotify>;
};
