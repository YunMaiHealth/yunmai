import { UsePoint as TUsePoint } from "../api/usePoint/UsePoint";

export const USEPOINT_TITLE_FIELD = "usePointType";

export const UsePointTitle = (record: TUsePoint): string => {
  return record.usePointType || String(record.id);
};
