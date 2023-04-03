import { SortOrder } from "../../util/SortOrder";

export type UserQuestionOrderByInput = {
  id?: SortOrder;
  questionTime?: SortOrder;
  questionTitle?: SortOrder;
  questionContent?: SortOrder;
  isPublic?: SortOrder;
  userId?: SortOrder;
};
