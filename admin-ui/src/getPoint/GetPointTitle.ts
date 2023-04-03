import { GetPoint as TGetPoint } from "../api/getPoint/GetPoint";

export const GETPOINT_TITLE_FIELD = "getPointType";

export const GetPointTitle = (record: TGetPoint): string => {
  return record.getPointType || String(record.id);
};
