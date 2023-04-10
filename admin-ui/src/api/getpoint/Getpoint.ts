import { User } from "../user/User";

export type Getpoint = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
};
