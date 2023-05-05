import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  oauthType?: SortOrder;
  nickName?: SortOrder;
  sessionKey?: SortOrder;
  inviterId?: SortOrder;
  phone?: SortOrder;
  gender?: SortOrder;
  openId?: SortOrder;
  avatarUrl?: SortOrder;
  unionId?: SortOrder;
  birthday?: SortOrder;
  identitycard?: SortOrder;
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
