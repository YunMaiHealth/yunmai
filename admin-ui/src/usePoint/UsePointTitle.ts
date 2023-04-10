import { UsePoint as TUsePoint } from "../api/usePoint/UsePoint";

export const USEPOINT_TITLE_FIELD = "id";

export const UsePointTitle = (record: TUsePoint): string => {
  return record.id || String(record.id);
};
