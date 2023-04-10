import { InputJsonValue } from "../../types";
import { HubitusCreateNestedManyWithoutUsersInput } from "./HubitusCreateNestedManyWithoutUsersInput";
import { StatusCreateNestedManyWithoutUsersInput } from "./StatusCreateNestedManyWithoutUsersInput";
import { GetpointCreateNestedManyWithoutUsersInput } from "./GetpointCreateNestedManyWithoutUsersInput";
import { UsepointCreateNestedManyWithoutUsersInput } from "./UsepointCreateNestedManyWithoutUsersInput";
import { MessageCreateNestedManyWithoutUsersInput } from "./MessageCreateNestedManyWithoutUsersInput";
import { QuestionCreateNestedManyWithoutUsersInput } from "./QuestionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  creatTime: Date;
  lastLoginTime: Date;
  trueName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
  hubituses?: HubitusCreateNestedManyWithoutUsersInput;
  statuses?: StatusCreateNestedManyWithoutUsersInput;
  getpoints?: GetpointCreateNestedManyWithoutUsersInput;
  usepoints?: UsepointCreateNestedManyWithoutUsersInput;
  messages?: MessageCreateNestedManyWithoutUsersInput;
  questions?: QuestionCreateNestedManyWithoutUsersInput;
};
