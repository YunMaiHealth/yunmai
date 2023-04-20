import { ExpenseMataGas as TExpenseMataGas } from "../api/expenseMataGas/ExpenseMataGas";

export const EXPENSEMATAGAS_TITLE_FIELD = "category";

export const ExpenseMataGasTitle = (record: TExpenseMataGas): string => {
  return record.category || String(record.id);
};
