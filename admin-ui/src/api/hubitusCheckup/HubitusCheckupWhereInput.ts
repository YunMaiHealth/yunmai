import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HubitusCheckupWhereInput = {
  id?: StringFilter;
  currentHabitus?: StringNullableFilter;
  testResult?: StringNullableFilter;
  countResult?: StringNullableFilter;
  suggest?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
