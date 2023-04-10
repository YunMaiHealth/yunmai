import { InputJsonValue } from "../../types";
import { HubitusCheckupUpdateManyWithoutUsersInput } from "./HubitusCheckupUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  hubitusCheckups?: HubitusCheckupUpdateManyWithoutUsersInput;
};
