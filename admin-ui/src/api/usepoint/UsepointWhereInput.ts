import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type UsepointWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  points?: IntFilter;
  usePointType?: StringFilter;
};
