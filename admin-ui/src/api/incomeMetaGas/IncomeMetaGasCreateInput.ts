import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IncomeMetaGasCreateInput = {
  income_date: Date;
  user?: UserWhereUniqueInput | null;
  amount: number;
  category: string;
};
