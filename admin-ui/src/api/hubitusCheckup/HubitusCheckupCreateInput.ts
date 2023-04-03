import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HubitusCheckupCreateInput = {
  countResult?: string | null;
  currentHabitus?: string | null;
  suggest?: string | null;
  testResult?: string | null;
  testTime: Date;
  user: UserWhereUniqueInput;
};
