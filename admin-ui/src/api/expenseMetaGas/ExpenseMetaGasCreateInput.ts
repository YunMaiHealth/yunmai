import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ExpenseMetaGasCreateInput = {
  expense_date: Date;
  user?: UserWhereUniqueInput | null;
  amount: number;
  category: string;
};
