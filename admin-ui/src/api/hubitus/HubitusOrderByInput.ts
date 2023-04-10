import { SortOrder } from "../../util/SortOrder";

export type HubitusOrderByInput = {
  id?: SortOrder;
  currentHabitus?: SortOrder;
  testResult?: SortOrder;
  countResult?: SortOrder;
  suggest?: SortOrder;
  testTime?: SortOrder;
  userId?: SortOrder;
};
