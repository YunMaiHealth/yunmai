import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HubitusWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
