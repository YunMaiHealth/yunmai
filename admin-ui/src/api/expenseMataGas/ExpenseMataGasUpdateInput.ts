import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ExpenseMataGasUpdateInput = {
  expense_date?: Date;
  user?: UserWhereUniqueInput | null;
  amount?: number;
  category?: string;
};
