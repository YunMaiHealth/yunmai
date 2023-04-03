import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UsePointWhereInput = {
  id?: StringFilter;
  usePoint?: IntFilter;
  usePointType?: StringFilter;
  user?: UserWhereUniqueInput;
};
