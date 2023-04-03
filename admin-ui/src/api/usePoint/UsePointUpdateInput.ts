import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UsePointUpdateInput = {
  usePointTime?: Date;
  usePoint?: number;
  usePointType?: string;
  user?: UserWhereUniqueInput | null;
};
