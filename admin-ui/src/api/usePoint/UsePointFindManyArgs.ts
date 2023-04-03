import { UsePointWhereInput } from "./UsePointWhereInput";
import { UsePointOrderByInput } from "./UsePointOrderByInput";

export type UsePointFindManyArgs = {
  where?: UsePointWhereInput;
  orderBy?: Array<UsePointOrderByInput>;
  skip?: number;
  take?: number;
};
