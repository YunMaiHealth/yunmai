import { User } from "../user/User";

export type ExpenseMetaGas = {
  id: string;
  expense_date: Date;
  user?: User | null;
  amount: number;
  category: string;
};
