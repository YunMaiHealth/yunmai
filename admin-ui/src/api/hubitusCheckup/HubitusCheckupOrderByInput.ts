import { SortOrder } from "../../util/SortOrder";

export type HubitusCheckupOrderByInput = {
  countResult?: SortOrder;
  currentHabitus?: SortOrder;
  id?: SortOrder;
  suggest?: SortOrder;
  testResult?: SortOrder;
  testTime?: SortOrder;
  userId?: SortOrder;
};
