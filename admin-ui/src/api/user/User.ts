import { JsonValue } from "type-fest";
import { HubitusCheckup } from "../hubitusCheckup/HubitusCheckup";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: JsonValue;
  hubitusCheckups?: Array<HubitusCheckup>;
};
