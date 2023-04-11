import { User } from "../user/User";

export type Getpoint = {
  id: string;
  getPointTime: Date;
  user?: User | null;
  points: number;
  getPointType: string;
};
