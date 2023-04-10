import { SortOrder } from "../../util/SortOrder";

export type HubitusCheckupOrderByInput = {
  id?: SortOrder;
  testTime?: SortOrder;
  currentHabitus?: SortOrder;
  testResult?: SortOrder;
  countResult?: SortOrder;
  suggest?: SortOrder;
  userId?: SortOrder;
};
