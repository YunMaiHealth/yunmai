import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  creatTime: Date;
  lastLoginTime: Date;
  trueName?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
};
