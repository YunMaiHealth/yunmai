import { Reply as TReply } from "../api/reply/Reply";

export const REPLY_TITLE_FIELD = "questionReply";

export const ReplyTitle = (record: TReply): string => {
  return record.questionReply || String(record.id);
};
