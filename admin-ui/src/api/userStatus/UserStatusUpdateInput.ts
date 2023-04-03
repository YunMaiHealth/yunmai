import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserStatusUpdateInput = {
  blobValue?: string | null;
  dateValue?: Date | null;
  doubleValue?: number | null;
  intValue?: number | null;
  jsonValue?: InputJsonValue;
  status?: string | null;
  streamId?: string | null;
  stringValue?: string | null;
  updateTime?: Date;
  user?: UserWhereUniqueInput | null;
};
