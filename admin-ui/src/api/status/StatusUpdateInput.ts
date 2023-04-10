import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StatusUpdateInput = {
  updateTime?: Date;
  status?: string;
  intValue?: number | null;
  doubleValue?: number | null;
  stringValue?: string | null;
  dateValue?: Date | null;
  jsonValue?: InputJsonValue;
  streamId?: string | null;
  user?: UserWhereUniqueInput | null;
};