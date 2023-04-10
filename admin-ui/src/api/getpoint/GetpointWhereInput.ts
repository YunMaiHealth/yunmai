import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GetpointWhereInput = {
  id?: StringFilter;
  getPoint?: IntFilter;
  getPointType?: StringFilter;
  user?: UserWhereUniqueInput;
};
