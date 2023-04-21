import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type HabitusUpdateInput = {
  testTime?: Date;
  user?: UserWhereUniqueInput | null;
  currentHabitus?: string;
  testResult?: InputJsonValue;
  countResult?: InputJsonValue;
  suggest?: InputJsonValue;
};
