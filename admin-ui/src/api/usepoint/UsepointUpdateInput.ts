import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UsepointUpdateInput = {
  usePointTime?: Date;
  user?: UserWhereUniqueInput | null;
  points?: number;
  usePointType?: string;
};
