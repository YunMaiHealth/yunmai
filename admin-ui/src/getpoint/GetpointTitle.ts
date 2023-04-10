import { Getpoint as TGetpoint } from "../api/getpoint/Getpoint";

export const GETPOINT_TITLE_FIELD = "getPointType";

export const GetpointTitle = (record: TGetpoint): string => {
  return record.getPointType || String(record.id);
};
