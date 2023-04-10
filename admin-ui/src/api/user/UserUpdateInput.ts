import { InputJsonValue } from "../../types";
import { HubitusUpdateManyWithoutUsersInput } from "./HubitusUpdateManyWithoutUsersInput";
import { StatusUpdateManyWithoutUsersInput } from "./StatusUpdateManyWithoutUsersInput";
import { GetpointUpdateManyWithoutUsersInput } from "./GetpointUpdateManyWithoutUsersInput";
import { UsepointUpdateManyWithoutUsersInput } from "./UsepointUpdateManyWithoutUsersInput";
import { MessageUpdateManyWithoutUsersInput } from "./MessageUpdateManyWithoutUsersInput";
import { QuestionUpdateManyWithoutUsersInput } from "./QuestionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  creatTime?: Date;
  lastLoginTime?: Date;
  trueName?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
  hubituses?: HubitusUpdateManyWithoutUsersInput;
  statuses?: StatusUpdateManyWithoutUsersInput;
  getpoints?: GetpointUpdateManyWithoutUsersInput;
  usepoints?: UsepointUpdateManyWithoutUsersInput;
  messages?: MessageUpdateManyWithoutUsersInput;
  questions?: QuestionUpdateManyWithoutUsersInput;
};
