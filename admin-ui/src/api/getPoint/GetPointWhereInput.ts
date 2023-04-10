import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GetPointWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
