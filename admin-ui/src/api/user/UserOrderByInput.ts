import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  id?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  oauthType?: SortOrder;
  openId?: SortOrder;
  sessionKey?: SortOrder;
  unionId?: SortOrder;
  trueName?: SortOrder;
  inviterId?: SortOrder;
  phone?: SortOrder;
  province?: SortOrder;
  nickName?: SortOrder;
  avatarUrl?: SortOrder;
  gender?: SortOrder;
  birthday?: SortOrder;
  city?: SortOrder;
  userIdCard?: SortOrder;
  country?: SortOrder;
  language?: SortOrder;
  creatTime?: SortOrder;
  lastLoginTime?: SortOrder;
};
