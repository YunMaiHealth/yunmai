import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type StatusCreateInput = {
  updateTime: Date;
  user: UserWhereUniqueInput;
  status: string;
  intValue?: number | null;
  doubleValue?: number | null;
  stringValue?: string | null;
  dateValue?: Date | null;
  jsonValue?: InputJsonValue;
  streamId?: string | null;
};
