import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "nickName";

export const UserTitle = (record: TUser): string => {
  return record.nickName || String(record.id);
};
