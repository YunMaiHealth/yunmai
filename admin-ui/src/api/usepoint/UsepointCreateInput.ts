import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UsepointCreateInput = {
  usePointTime: Date;
  usePoint: number;
  usePointType: string;
  user?: UserWhereUniqueInput | null;
};
