import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StatusWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
