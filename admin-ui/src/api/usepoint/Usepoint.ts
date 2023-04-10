import { User } from "../user/User";

export type Usepoint = {
  id: string;
  usePointTime: Date;
  usePoint: number;
  usePointType: string;
  user?: User | null;
};
