import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GetpointUpdateInput = {
  getPointTime?: Date;
  getPoint?: number;
  getPointType?: string;
  user?: UserWhereUniqueInput | null;
};
