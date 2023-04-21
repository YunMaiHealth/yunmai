import { ExpenseMetaGasWhereInput } from "./ExpenseMetaGasWhereInput";
import { ExpenseMetaGasOrderByInput } from "./ExpenseMetaGasOrderByInput";

export type ExpenseMetaGasFindManyArgs = {
  where?: ExpenseMetaGasWhereInput;
  orderBy?: Array<ExpenseMetaGasOrderByInput>;
  skip?: number;
  take?: number;
};
