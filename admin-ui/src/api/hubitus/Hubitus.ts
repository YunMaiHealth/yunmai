import { User } from "../user/User";

export type Hubitus = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
};
