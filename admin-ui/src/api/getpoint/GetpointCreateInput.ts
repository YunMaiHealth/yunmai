import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GetpointCreateInput = {
  getPointTime: Date;
  getPoint?: number | null;
  getPointType?: string | null;
  user?: UserWhereUniqueInput | null;
};
