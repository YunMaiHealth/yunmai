import { HubitusWhereInput } from "./HubitusWhereInput";
import { HubitusOrderByInput } from "./HubitusOrderByInput";

export type HubitusFindManyArgs = {
  where?: HubitusWhereInput;
  orderBy?: Array<HubitusOrderByInput>;
  skip?: number;
  take?: number;
};
