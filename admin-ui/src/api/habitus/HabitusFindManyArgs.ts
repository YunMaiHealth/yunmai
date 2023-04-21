import { HabitusWhereInput } from "./HabitusWhereInput";
import { HabitusOrderByInput } from "./HabitusOrderByInput";

export type HabitusFindManyArgs = {
  where?: HabitusWhereInput;
  orderBy?: Array<HabitusOrderByInput>;
  skip?: number;
  take?: number;
};
