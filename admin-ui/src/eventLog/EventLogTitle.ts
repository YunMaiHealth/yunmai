import { EventLog as TEventLog } from "../api/eventLog/EventLog";

export const EVENTLOG_TITLE_FIELD = "id";

export const EventLogTitle = (record: TEventLog): string => {
  return record.id || String(record.id);
};
