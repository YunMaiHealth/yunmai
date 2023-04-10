import { InputJsonValue } from "../../types";
import { MessageNotifyCreateNestedManyWithoutUsersInput } from "./MessageNotifyCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  messageNotifies?: MessageNotifyCreateNestedManyWithoutUsersInput;
};
