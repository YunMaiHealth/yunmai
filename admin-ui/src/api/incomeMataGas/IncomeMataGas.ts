import { User } from "../user/User";

export type IncomeMataGas = {
  id: string;
  income_date: Date;
  user?: User | null;
  amount: number;
  category: string;
};
