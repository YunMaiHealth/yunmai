import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type InquiryWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  content?: JsonFilter;
  isPublic?: BooleanFilter;
  title?: StringFilter;
};
