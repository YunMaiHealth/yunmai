import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Hubitus = {
  id: string;
  currentHabitus: string;
  testResult: JsonValue;
  countResult: JsonValue;
  suggest: string | null;
  testTime: Date;
  user?: User;
};
