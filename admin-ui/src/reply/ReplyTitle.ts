import { Reply as TReply } from "../api/reply/Reply";

export const REPLY_TITLE_FIELD = "id";

export const ReplyTitle = (record: TReply): string => {
  return record.id || String(record.id);
};
