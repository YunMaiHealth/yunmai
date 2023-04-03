import { MessageNotify as TMessageNotify } from "../api/messageNotify/MessageNotify";

export const MESSAGENOTIFY_TITLE_FIELD = "id";

export const MessageNotifyTitle = (record: TMessageNotify): string => {
  return record.id || String(record.id);
};
