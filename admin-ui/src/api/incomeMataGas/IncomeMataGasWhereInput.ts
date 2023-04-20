import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type IncomeMataGasWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  amount?: IntFilter;
  category?: StringFilter;
};
