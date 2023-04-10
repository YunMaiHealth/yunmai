import { ReplyQuestion as TReplyQuestion } from "../api/replyQuestion/ReplyQuestion";

export const REPLYQUESTION_TITLE_FIELD = "id";

export const ReplyQuestionTitle = (record: TReplyQuestion): string => {
  return record.id || String(record.id);
};
