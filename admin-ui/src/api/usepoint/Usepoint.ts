import { User } from "../user/User";

export type Usepoint = {
  id: string;
  usePointTime: Date;
  user?: User | null;
  points: number;
  usePointType: string;
};
