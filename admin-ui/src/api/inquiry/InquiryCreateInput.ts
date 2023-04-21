import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type InquiryCreateInput = {
  inquiryTime: Date;
  user?: UserWhereUniqueInput | null;
  content: InputJsonValue;
  isPublic: boolean;
  title: string;
};
