import { SortOrder } from "../../util/SortOrder";

export type HubitusCheckupOrderByInput = {
  id?: SortOrder;
  currentHabitus?: SortOrder;
  testResult?: SortOrder;
  countResult?: SortOrder;
  suggest?: SortOrder;
  testTime?: SortOrder;
  userId?: SortOrder;
};
