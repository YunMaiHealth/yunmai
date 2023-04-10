import { UserStatus as TUserStatus } from "../api/userStatus/UserStatus";

export const USERSTATUS_TITLE_FIELD = "id";

export const UserStatusTitle = (record: TUserStatus): string => {
  return record.id || String(record.id);
};
