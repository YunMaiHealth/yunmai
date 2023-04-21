import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type HabitusWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  currentHabitus?: StringFilter;
  testResult?: JsonFilter;
  countResult?: JsonFilter;
  suggest?: JsonFilter;
};
