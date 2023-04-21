import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ExpenseMetaGasUpdateInput = {
  expense_date?: Date;
  user?: UserWhereUniqueInput | null;
  amount?: number;
  category?: string;
};
