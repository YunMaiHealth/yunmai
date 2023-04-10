import { User } from "../user/User";

export type Usepoint = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
};
