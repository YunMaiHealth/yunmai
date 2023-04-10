import { GetPoint as TGetPoint } from "../api/getPoint/GetPoint";

export const GETPOINT_TITLE_FIELD = "id";

export const GetPointTitle = (record: TGetPoint): string => {
  return record.id || String(record.id);
};
