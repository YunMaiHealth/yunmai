import { Usepoint as TUsepoint } from "../api/usepoint/Usepoint";

export const USEPOINT_TITLE_FIELD = "id";

export const UsepointTitle = (record: TUsepoint): string => {
  return record.id || String(record.id);
};
