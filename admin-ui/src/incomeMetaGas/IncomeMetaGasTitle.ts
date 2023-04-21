import { IncomeMetaGas as TIncomeMetaGas } from "../api/incomeMetaGas/IncomeMetaGas";

export const INCOMEMETAGAS_TITLE_FIELD = "category";

export const IncomeMetaGasTitle = (record: TIncomeMetaGas): string => {
  return record.category || String(record.id);
};
