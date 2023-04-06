import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HubitusUpdateInput = {
  currentHabitus?: string | null;
  testResult?: string | null;
  countResult?: string | null;
  suggest?: string | null;
  testTime?: Date;
  user?: UserWhereUniqueInput;
};
