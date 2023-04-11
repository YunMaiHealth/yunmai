import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UsepointCreateInput = {
  usePointTime: Date;
  user?: UserWhereUniqueInput | null;
  points: number;
  usePointType: string;
};
