import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GetpointUpdateInput = {
  getPointTime?: Date;
  getPoint?: number | null;
  getPointType?: string | null;
  user?: UserWhereUniqueInput | null;
};
