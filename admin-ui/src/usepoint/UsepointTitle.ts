import { Usepoint as TUsepoint } from "../api/usepoint/Usepoint";

export const USEPOINT_TITLE_FIELD = "usePointType";

export const UsepointTitle = (record: TUsepoint): string => {
  return record.usePointType || String(record.id);
};
