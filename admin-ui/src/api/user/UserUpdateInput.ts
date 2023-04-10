import { InputJsonValue } from "../../types";
import { UsePointUpdateManyWithoutUsersInput } from "./UsePointUpdateManyWithoutUsersInput";
import { GetPointUpdateManyWithoutUsersInput } from "./GetPointUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  usePoints?: UsePointUpdateManyWithoutUsersInput;
  getPoints?: GetPointUpdateManyWithoutUsersInput;
};
