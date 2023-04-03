import { GetPointWhereInput } from "./GetPointWhereInput";
import { GetPointOrderByInput } from "./GetPointOrderByInput";

export type GetPointFindManyArgs = {
  where?: GetPointWhereInput;
  orderBy?: Array<GetPointOrderByInput>;
  skip?: number;
  take?: number;
};
