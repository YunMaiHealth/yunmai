import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserStatusWhereInput = {
  blobValue?: StringNullableFilter;
  dateValue?: DateTimeNullableFilter;
  doubleValue?: FloatNullableFilter;
  id?: StringFilter;
  intValue?: IntNullableFilter;
  jsonValue?: JsonFilter;
  status?: StringNullableFilter;
  streamId?: StringNullableFilter;
  stringValue?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
