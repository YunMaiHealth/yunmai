import { JsonValue } from "type-fest";

export type User = {
  id: string;
  creatTime: Date;
  lastLoginTime: Date;
  trueName: string | null;
  username: string;
  roles: JsonValue;
};
