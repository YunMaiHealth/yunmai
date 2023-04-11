import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GetpointCreateInput = {
  getPointTime: Date;
  user?: UserWhereUniqueInput | null;
  points: number;
  getPointType: string;
};
