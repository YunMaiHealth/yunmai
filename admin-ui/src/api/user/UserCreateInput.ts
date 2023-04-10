import { InputJsonValue } from "../../types";
import { HubitusCheckupCreateNestedManyWithoutUsersInput } from "./HubitusCheckupCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  hubitusCheckups?: HubitusCheckupCreateNestedManyWithoutUsersInput;
};
