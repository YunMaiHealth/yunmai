import { MessageNotify as TMessageNotify } from "../api/messageNotify/MessageNotify";

export const MESSAGENOTIFY_TITLE_FIELD = "messageContent";

export const MessageNotifyTitle = (record: TMessageNotify): string => {
  return record.messageContent || String(record.id);
};
