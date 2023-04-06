import { Question as TQuestion } from "../api/question/Question";

export const QUESTION_TITLE_FIELD = "questionTitle";

export const QuestionTitle = (record: TQuestion): string => {
  return record.questionTitle || String(record.id);
};
