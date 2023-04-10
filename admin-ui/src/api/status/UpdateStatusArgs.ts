import { StatusWhereUniqueInput } from "./StatusWhereUniqueInput";
import { StatusUpdateInput } from "./StatusUpdateInput";

export type UpdateStatusArgs = {
  where: StatusWhereUniqueInput;
  data: StatusUpdateInput;
};
