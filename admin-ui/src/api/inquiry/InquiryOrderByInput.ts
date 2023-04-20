import { SortOrder } from "../../util/SortOrder";

export type InquiryOrderByInput = {
  id?: SortOrder;
  inquiryTime?: SortOrder;
  userId?: SortOrder;
  content?: SortOrder;
  isPublic?: SortOrder;
  title?: SortOrder;
};
