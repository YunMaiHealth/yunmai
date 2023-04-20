import { IncomeMataGasWhereInput } from "./IncomeMataGasWhereInput";
import { IncomeMataGasOrderByInput } from "./IncomeMataGasOrderByInput";

export type IncomeMataGasFindManyArgs = {
  where?: IncomeMataGasWhereInput;
  orderBy?: Array<IncomeMataGasOrderByInput>;
  skip?: number;
  take?: number;
};
