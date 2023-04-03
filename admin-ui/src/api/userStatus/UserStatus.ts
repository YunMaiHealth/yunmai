import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type UserStatus = {
  id: string;
  status: string | null;
  intValue: number | null;
  doubleValue: number | null;
  stringValue: string | null;
  dateValue: Date | null;
  jsonValue: JsonValue;
  blobValue: string | null;
  updateTime: Date;
  streamId: string | null;
  user?: User | null;
};
