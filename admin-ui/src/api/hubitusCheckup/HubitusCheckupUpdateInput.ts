import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HubitusCheckupUpdateInput = {
  currentHabitus?: string | null;
  testResult?: string | null;
  countResult?: string | null;
  suggest?: string | null;
  testTime?: Date;
  user?: UserWhereUniqueInput;
};
