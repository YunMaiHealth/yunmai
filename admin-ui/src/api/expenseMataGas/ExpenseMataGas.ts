import { User } from "../user/User";

export type ExpenseMataGas = {
  id: string;
  expense_date: Date;
  user?: User | null;
  amount: number;
  category: string;
};
