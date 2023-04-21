import { User } from "../user/User";
import { JsonValue } from "type-fest";

export type Habitus = {
  id: string;
  testTime: Date;
  user?: User | null;
  currentHabitus: string;
  testResult: JsonValue;
  countResult: JsonValue;
  suggest: JsonValue;
};
