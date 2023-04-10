import { InputJsonValue } from "../../types";
import { UsePointCreateNestedManyWithoutUsersInput } from "./UsePointCreateNestedManyWithoutUsersInput";
import { GetPointCreateNestedManyWithoutUsersInput } from "./GetPointCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  usePoints?: UsePointCreateNestedManyWithoutUsersInput;
  getPoints?: GetPointCreateNestedManyWithoutUsersInput;
};
