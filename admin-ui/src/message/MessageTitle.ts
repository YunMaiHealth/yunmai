import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "messageContent";

export const MessageTitle = (record: TMessage): string => {
  return record.messageContent || String(record.id);
};
