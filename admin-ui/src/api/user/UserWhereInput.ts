import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  id?: StringFilter;
  trueName?: StringNullableFilter;
  username?: StringFilter;
};
