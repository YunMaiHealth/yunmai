import { SortOrder } from "../../util/SortOrder";

export type ExpenseMataGasOrderByInput = {
  id?: SortOrder;
  expense_date?: SortOrder;
  userId?: SortOrder;
  amount?: SortOrder;
  category?: SortOrder;
};
