import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StatusCreateInput = {
  user?: UserWhereUniqueInput | null;
};
