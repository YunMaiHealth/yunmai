import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type IncomeMetaGasWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  amount?: IntFilter;
  category?: StringFilter;
};
