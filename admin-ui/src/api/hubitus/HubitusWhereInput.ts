import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HubitusWhereInput = {
  id?: StringFilter;
  currentHabitus?: StringNullableFilter;
  testResult?: StringNullableFilter;
  countResult?: StringNullableFilter;
  suggest?: StringNullableFilter;
  testTime?: DateTimeFilter;
  user?: UserWhereUniqueInput;
};
