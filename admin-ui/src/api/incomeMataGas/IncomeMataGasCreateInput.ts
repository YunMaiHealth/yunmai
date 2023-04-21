import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IncomeMataGasCreateInput = {
  income_date: Date;
  user?: UserWhereUniqueInput | null;
  amount: number;
  category: string;
};
