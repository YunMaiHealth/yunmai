import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type HabitusCreateInput = {
  testTime: Date;
  user?: UserWhereUniqueInput | null;
  currentHabitus: string;
  testResult: InputJsonValue;
  countResult: InputJsonValue;
  suggest?: InputJsonValue;
};
