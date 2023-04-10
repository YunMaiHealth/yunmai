import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GetpointCreateInput = {
  getPointTime: Date;
  getPoint: number;
  getPointType: string;
  user?: UserWhereUniqueInput | null;
};
