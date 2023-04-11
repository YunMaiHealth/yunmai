import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  id?: SortOrder;
  questionTime?: SortOrder;
  userId?: SortOrder;
  questionContent?: SortOrder;
  isPublic?: SortOrder;
};
