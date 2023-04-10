import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UsepointWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
