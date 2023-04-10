import { User } from "../user/User";
import { Event } from "../event/Event";

export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  event?: Event | null;
};
