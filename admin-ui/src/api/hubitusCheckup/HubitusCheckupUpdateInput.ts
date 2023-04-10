import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HubitusCheckupUpdateInput = {
  testTime?: Date;
  currentHabitus?: string | null;
  testResult?: string | null;
  countResult?: string | null;
  suggest?: string | null;
  user?: UserWhereUniqueInput | null;
};
