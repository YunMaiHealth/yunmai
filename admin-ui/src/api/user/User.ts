import { JsonValue } from "type-fest";
import { Hubitus } from "../hubitus/Hubitus";
import { Status } from "../status/Status";
import { Getpoint } from "../getpoint/Getpoint";
import { Usepoint } from "../usepoint/Usepoint";
import { Message } from "../message/Message";
import { Question } from "../question/Question";

export type User = {
  id: string;
  creatTime: Date;
  lastLoginTime: Date;
  trueName: string | null;
  username: string;
  roles: JsonValue;
  hubituses?: Array<Hubitus>;
  statuses?: Array<Status>;
  getpoints?: Array<Getpoint>;
  usepoints?: Array<Usepoint>;
  messages?: Array<Message>;
  questions?: Array<Question>;
};
