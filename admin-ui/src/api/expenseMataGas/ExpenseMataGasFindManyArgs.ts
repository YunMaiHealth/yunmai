import { ExpenseMataGasWhereInput } from "./ExpenseMataGasWhereInput";
import { ExpenseMataGasOrderByInput } from "./ExpenseMataGasOrderByInput";

export type ExpenseMataGasFindManyArgs = {
  where?: ExpenseMataGasWhereInput;
  orderBy?: Array<ExpenseMataGasOrderByInput>;
  skip?: number;
  take?: number;
};
