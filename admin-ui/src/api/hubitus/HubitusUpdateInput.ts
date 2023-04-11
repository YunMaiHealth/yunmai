import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type HubitusUpdateInput = {
  testTime?: Date;
  user?: UserWhereUniqueInput | null;
  currentHabitus?: string;
  testResult?: InputJsonValue;
  countResult?: InputJsonValue;
  suggest?: string | null;
};
