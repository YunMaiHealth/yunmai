import { ReplyQuestion as TReplyQuestion } from "../api/replyQuestion/ReplyQuestion";

export const REPLYQUESTION_TITLE_FIELD = "questionReply";

export const ReplyQuestionTitle = (record: TReplyQuestion): string => {
  return record.questionReply || String(record.id);
};
