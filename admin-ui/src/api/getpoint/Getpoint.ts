import { User } from "../user/User";

export type Getpoint = {
  id: string;
  getPointTime: Date;
  getPoint: number | null;
  getPointType: string | null;
  user?: User | null;
};
