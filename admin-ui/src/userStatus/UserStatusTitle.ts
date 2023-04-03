import { UserStatus as TUserStatus } from "../api/userStatus/UserStatus";

export const USERSTATUS_TITLE_FIELD = "status";

export const UserStatusTitle = (record: TUserStatus): string => {
  return record.status || String(record.id);
};
