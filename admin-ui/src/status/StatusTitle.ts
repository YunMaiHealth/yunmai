import { Status as TStatus } from "../api/status/Status";

export const STATUS_TITLE_FIELD = "status";

export const StatusTitle = (record: TStatus): string => {
  return record.status || String(record.id);
};
