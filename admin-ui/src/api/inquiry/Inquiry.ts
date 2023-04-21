import { User } from "../user/User";
import { JsonValue } from "type-fest";

export type Inquiry = {
  id: string;
  inquiryTime: Date;
  user?: User | null;
  content: JsonValue;
  isPublic: boolean;
  title: string;
};
