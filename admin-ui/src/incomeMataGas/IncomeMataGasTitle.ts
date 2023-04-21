import { IncomeMataGas as TIncomeMataGas } from "../api/incomeMataGas/IncomeMataGas";

export const INCOMEMATAGAS_TITLE_FIELD = "category";

export const IncomeMataGasTitle = (record: TIncomeMataGas): string => {
  return record.category || String(record.id);
};
