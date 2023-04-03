import { User } from "../user/User";

export type UsePoint = {
  id: string;
  usePointTime: Date;
  usePoint: number;
  usePointType: string;
  user?: User | null;
};
