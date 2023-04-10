import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Status = {
  id: string;
  updateTime: Date;
  status: string;
  intValue: number | null;
  doubleValue: number | null;
  stringValue: string | null;
  dateValue: Date | null;
  jsonValue: JsonValue;
  streamId: string | null;
  user?: User | null;
};
