import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UsepointUpdateInput = {
  usePointTime?: Date;
  usePoint?: number;
  usePointType?: string;
  user?: UserWhereUniqueInput | null;
};
