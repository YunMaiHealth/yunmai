import { User } from "../user/User";

export type GetPoint = {
  id: string;
  getPointTime: Date;
  getPoint: number | null;
  getPointType: string | null;
  user?: User | null;
};
