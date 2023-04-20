import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type IncomeMataGasUpdateInput = {
  income_date?: Date;
  user?: UserWhereUniqueInput | null;
  amount?: number;
  category?: string;
};
