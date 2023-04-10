import { User } from "../user/User";

export type Getpoint = {
  id: string;
  getPointTime: Date;
  getPoint: number;
  getPointType: string;
  user?: User | null;
};
