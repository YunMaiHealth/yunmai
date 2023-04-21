import { IncomeMetaGasWhereInput } from "./IncomeMetaGasWhereInput";
import { IncomeMetaGasOrderByInput } from "./IncomeMetaGasOrderByInput";

export type IncomeMetaGasFindManyArgs = {
  where?: IncomeMetaGasWhereInput;
  orderBy?: Array<IncomeMetaGasOrderByInput>;
  skip?: number;
  take?: number;
};
