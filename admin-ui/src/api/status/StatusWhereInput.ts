import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type StatusWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  status?: StringFilter;
  intValue?: IntNullableFilter;
  doubleValue?: FloatNullableFilter;
  stringValue?: StringNullableFilter;
  dateValue?: DateTimeNullableFilter;
  jsonValue?: JsonFilter;
  streamId?: StringNullableFilter;
};
