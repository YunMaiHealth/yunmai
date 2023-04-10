import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HubitusWhereInput = {
  id?: StringFilter;
  currentHabitus?: StringFilter;
  testResult?: JsonFilter;
  countResult?: JsonFilter;
  suggest?: StringNullableFilter;
  testTime?: DateTimeFilter;
  user?: UserWhereUniqueInput;
};
