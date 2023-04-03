import { UserQuestion as TUserQuestion } from "../api/userQuestion/UserQuestion";

export const USERQUESTION_TITLE_FIELD = "questionTitle";

export const UserQuestionTitle = (record: TUserQuestion): string => {
  return record.questionTitle || String(record.id);
};
