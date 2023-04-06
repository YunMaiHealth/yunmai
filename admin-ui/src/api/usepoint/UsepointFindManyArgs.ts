import { UsepointWhereInput } from "./UsepointWhereInput";
import { UsepointOrderByInput } from "./UsepointOrderByInput";

export type UsepointFindManyArgs = {
  where?: UsepointWhereInput;
  orderBy?: Array<UsepointOrderByInput>;
  skip?: number;
  take?: number;
};
