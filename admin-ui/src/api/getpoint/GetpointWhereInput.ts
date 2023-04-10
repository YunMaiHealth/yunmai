import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GetpointWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
