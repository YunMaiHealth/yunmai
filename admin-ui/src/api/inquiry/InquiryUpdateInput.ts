import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type InquiryUpdateInput = {
  inquiryTime?: Date;
  user?: UserWhereUniqueInput | null;
  content?: InputJsonValue;
  isPublic?: boolean;
  title?: string;
};
