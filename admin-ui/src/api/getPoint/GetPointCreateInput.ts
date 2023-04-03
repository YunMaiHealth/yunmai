import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GetPointCreateInput = {
  getPointTime: Date;
  getPoint?: number | null;
  getPointType?: string | null;
  user?: UserWhereUniqueInput | null;
};
