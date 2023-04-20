import { InquiryWhereInput } from "./InquiryWhereInput";
import { InquiryOrderByInput } from "./InquiryOrderByInput";

export type InquiryFindManyArgs = {
  where?: InquiryWhereInput;
  orderBy?: Array<InquiryOrderByInput>;
  skip?: number;
  take?: number;
};
