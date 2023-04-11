import { SortOrder } from "../../util/SortOrder";

export type HubitusOrderByInput = {
  id?: SortOrder;
  testTime?: SortOrder;
  userId?: SortOrder;
  currentHabitus?: SortOrder;
  testResult?: SortOrder;
  countResult?: SortOrder;
  suggest?: SortOrder;
};
