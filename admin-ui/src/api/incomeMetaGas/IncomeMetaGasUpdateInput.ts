import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IncomeMetaGasUpdateInput = {
  income_date?: Date;
  user?: UserWhereUniqueInput | null;
  amount?: number;
  category?: string;
};
