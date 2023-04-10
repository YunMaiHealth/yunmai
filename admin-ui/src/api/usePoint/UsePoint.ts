import { User } from "../user/User";

export type UsePoint = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
};
