import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UsePointWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
