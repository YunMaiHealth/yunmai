import { User } from "../user/User";

export type Status = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
};
