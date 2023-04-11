import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type HubitusWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  currentHabitus?: StringFilter;
  testResult?: JsonFilter;
  countResult?: JsonFilter;
  suggest?: StringNullableFilter;
};
