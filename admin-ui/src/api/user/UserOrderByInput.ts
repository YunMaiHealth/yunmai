import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  oauthType?: SortOrder;
  nickName?: SortOrder;
  openId?: SortOrder;
  sessionKey?: SortOrder;
  unionId?: SortOrder;
  inviterId?: SortOrder;
  phone?: SortOrder;
  gender?: SortOrder;
  avatarUrl?: SortOrder;
  birthday?: SortOrder;
  userIdCard?: SortOrder;
  country?: SortOrder;
  language?: SortOrder;
  province?: SortOrder;
  city?: SortOrder;
  id?: SortOrder;
  realName?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  creatTime?: SortOrder;
  lastLoginTime?: SortOrder;
};
