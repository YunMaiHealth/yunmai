import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "messageType";

export const MessageTitle = (record: TMessage): string => {
  return record.messageType || String(record.id);
};
