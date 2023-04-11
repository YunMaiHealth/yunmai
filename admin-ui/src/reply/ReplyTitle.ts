import { Reply as TReply } from "../api/reply/Reply";

export const REPLY_TITLE_FIELD = "replyUserId";

export const ReplyTitle = (record: TReply): string => {
  return record.replyUserId || String(record.id);
};
