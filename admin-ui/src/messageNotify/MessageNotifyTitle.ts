import { MessageNotify as TMessageNotify } from "../api/messageNotify/MessageNotify";

export const MESSAGENOTIFY_TITLE_FIELD = "messageSource";

export const MessageNotifyTitle = (record: TMessageNotify): string => {
  return record.messageSource || String(record.id);
};
