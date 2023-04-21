import { Message as TMessage } from "../api/message/Message";

export const MESSAGE_TITLE_FIELD = "messageSource";

export const MessageTitle = (record: TMessage): string => {
  return record.messageSource || String(record.id);
};
