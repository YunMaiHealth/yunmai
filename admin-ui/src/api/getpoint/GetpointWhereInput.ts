import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type GetpointWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  points?: IntFilter;
  getPointType?: StringFilter;
};
