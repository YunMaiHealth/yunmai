import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ExpenseMataGasCreateInput = {
  expense_date: Date;
  user?: UserWhereUniqueInput | null;
  amount: number;
  category: string;
};
