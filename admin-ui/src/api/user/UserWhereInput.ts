import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MessageNotifyListRelationFilter } from "../messageNotify/MessageNotifyListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  messageNotifies?: MessageNotifyListRelationFilter;
};
