import { JsonValue } from "type-fest";
import { UsePoint } from "../usePoint/UsePoint";
import { GetPoint } from "../getPoint/GetPoint";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: JsonValue;
  usePoints?: Array<UsePoint>;
  getPoints?: Array<GetPoint>;
};
