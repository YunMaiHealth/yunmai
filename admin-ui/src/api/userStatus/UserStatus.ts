import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type UserStatus = {
  blobValue: string | null;
  dateValue: Date | null;
  doubleValue: number | null;
  id: string;
  intValue: number | null;
  jsonValue: JsonValue;
  status: string | null;
  streamId: string | null;
  stringValue: string | null;
  updateTime: Date;
  user?: User | null;
};
