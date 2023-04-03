import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HubitusCheckupCreateInput = {
  currentHabitus?: string | null;
  testResult?: string | null;
  countResult?: string | null;
  suggest?: string | null;
  testTime: Date;
  user: UserWhereUniqueInput;
};
