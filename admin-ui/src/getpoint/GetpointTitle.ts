import { Getpoint as TGetpoint } from "../api/getpoint/Getpoint";

export const GETPOINT_TITLE_FIELD = "id";

export const GetpointTitle = (record: TGetpoint): string => {
  return record.id || String(record.id);
};
