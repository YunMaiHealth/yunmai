import { User } from "../user/User";
import { JsonValue } from "type-fest";

export type Status = {
  id: string;
  updateTime: Date;
  user?: User;
  status: string;
  intValue: number | null;
  doubleValue: number | null;
  stringValue: string | null;
  dateValue: Date | null;
  jsonValue: JsonValue;
  streamId: string | null;
};
