import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HubitusCheckupWhereInput = {
  countResult?: StringNullableFilter;
  currentHabitus?: StringNullableFilter;
  id?: StringFilter;
  suggest?: StringNullableFilter;
  testResult?: StringNullableFilter;
  testTime?: DateTimeFilter;
  user?: UserWhereUniqueInput;
};
