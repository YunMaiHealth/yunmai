import { User } from "../user/User";

export type GetPoint = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
};
