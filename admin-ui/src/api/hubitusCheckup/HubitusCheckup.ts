import { User } from "../user/User";

export type HubitusCheckup = {
  id: string;
  testTime: Date;
  currentHabitus: string | null;
  testResult: string | null;
  countResult: string | null;
  suggest: string | null;
  user?: User | null;
};
