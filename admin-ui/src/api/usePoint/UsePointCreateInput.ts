import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UsePointCreateInput = {
  usePointTime: Date;
  usePoint: number;
  usePointType: string;
  user?: UserWhereUniqueInput | null;
};
