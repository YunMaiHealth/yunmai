import { SortOrder } from "../../util/SortOrder";

export type QuestionOrderByInput = {
  id?: SortOrder;
  questionTime?: SortOrder;
  questionContent?: SortOrder;
  isPublic?: SortOrder;
  userId?: SortOrder;
};
