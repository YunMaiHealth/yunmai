import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GetPointWhereInput = {
  id?: StringFilter;
  getPoint?: IntNullableFilter;
  getPointType?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
