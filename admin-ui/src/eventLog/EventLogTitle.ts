import { EventLog as TEventLog } from "../api/eventLog/EventLog";

export const EVENTLOG_TITLE_FIELD = "eventName";

export const EventLogTitle = (record: TEventLog): string => {
  return record.eventName || String(record.id);
};
