import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GetPointUpdateInput = {
  getPointTime?: Date;
  getPoint?: number | null;
  getPointType?: string | null;
  user?: UserWhereUniqueInput | null;
};
