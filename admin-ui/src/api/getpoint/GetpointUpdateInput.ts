import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GetpointUpdateInput = {
  getPointTime?: Date;
  user?: UserWhereUniqueInput | null;
  points?: number;
  getPointType?: string;
};
