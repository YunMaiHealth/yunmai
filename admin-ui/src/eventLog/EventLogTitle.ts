import { EventLog as TEventLog } from "../api/eventLog/EventLog";

export const EVENTLOG_TITLE_FIELD = "eventType";

export const EventLogTitle = (record: TEventLog): string => {
  return record.eventType || String(record.id);
};
