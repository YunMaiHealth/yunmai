import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserStatusUpdateInput = {
  updateTime?: Date;
  status?: string | null;
  intValue?: number | null;
  doubleValue?: number | null;
  stringValue?: string | null;
  dateValue?: Date | null;
  jsonValue?: InputJsonValue;
  blobValue?: string | null;
  streamId?: string | null;
  user?: UserWhereUniqueInput | null;
};
