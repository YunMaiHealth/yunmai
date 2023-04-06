import { GetpointWhereInput } from "./GetpointWhereInput";
import { GetpointOrderByInput } from "./GetpointOrderByInput";

export type GetpointFindManyArgs = {
  where?: GetpointWhereInput;
  orderBy?: Array<GetpointOrderByInput>;
  skip?: number;
  take?: number;
};
