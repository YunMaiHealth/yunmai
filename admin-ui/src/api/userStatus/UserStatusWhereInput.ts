import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserStatusWhereInput = {
  id?: StringFilter;
  status?: StringNullableFilter;
  intValue?: IntNullableFilter;
  doubleValue?: FloatNullableFilter;
  stringValue?: StringNullableFilter;
  dateValue?: DateTimeNullableFilter;
  jsonValue?: JsonFilter;
  blobValue?: StringNullableFilter;
  streamId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
