import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UsePointListRelationFilter } from "../usePoint/UsePointListRelationFilter";
import { GetPointListRelationFilter } from "../getPoint/GetPointListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  usePoints?: UsePointListRelationFilter;
  getPoints?: GetPointListRelationFilter;
};
