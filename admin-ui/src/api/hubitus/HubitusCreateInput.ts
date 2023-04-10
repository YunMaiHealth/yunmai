import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HubitusCreateInput = {
  currentHabitus: string;
  testResult: InputJsonValue;
  countResult: InputJsonValue;
  suggest?: string | null;
  testTime: Date;
  user: UserWhereUniqueInput;
};
