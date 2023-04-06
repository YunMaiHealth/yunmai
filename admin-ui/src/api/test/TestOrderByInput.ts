import { SortOrder } from "../../util/SortOrder";

export type TestOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  testName?: SortOrder;
};
