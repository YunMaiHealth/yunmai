import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserStatusCreateInput = {
  status?: string | null;
  intValue?: number | null;
  doubleValue?: number | null;
  stringValue?: string | null;
  dateValue?: Date | null;
  jsonValue?: InputJsonValue;
  blobValue?: string | null;
  updateTime: Date;
  streamId?: string | null;
  user?: UserWhereUniqueInput | null;
};
