import { User } from "../user/User";

export type HubitusCheckup = {
  countResult: string | null;
  currentHabitus: string | null;
  id: string;
  suggest: string | null;
  testResult: string | null;
  testTime: Date;
  user?: User;
};
