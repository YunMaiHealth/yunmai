import { UserStatusWhereInput } from "./UserStatusWhereInput";
import { UserStatusOrderByInput } from "./UserStatusOrderByInput";

export type UserStatusFindManyArgs = {
  where?: UserStatusWhereInput;
  orderBy?: Array<UserStatusOrderByInput>;
  skip?: number;
  take?: number;
};
