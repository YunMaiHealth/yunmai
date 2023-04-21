import { ExpenseMetaGas as TExpenseMetaGas } from "../api/expenseMetaGas/ExpenseMetaGas";

export const EXPENSEMETAGAS_TITLE_FIELD = "category";

export const ExpenseMetaGasTitle = (record: TExpenseMetaGas): string => {
  return record.category || String(record.id);
};
