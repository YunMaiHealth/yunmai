import { InputJsonValue } from "../../types";
import { MessageNotifyUpdateManyWithoutUsersInput } from "./MessageNotifyUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  messageNotifies?: MessageNotifyUpdateManyWithoutUsersInput;
};
