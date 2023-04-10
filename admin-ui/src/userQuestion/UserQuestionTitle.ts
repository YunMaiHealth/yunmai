import { UserQuestion as TUserQuestion } from "../api/userQuestion/UserQuestion";

export const USERQUESTION_TITLE_FIELD = "id";

export const UserQuestionTitle = (record: TUserQuestion): string => {
  return record.id || String(record.id);
};
