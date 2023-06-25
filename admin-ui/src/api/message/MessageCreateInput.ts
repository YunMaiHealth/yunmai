import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";

export type MessageCreateInput = {
  sendTime: Date;
  user?: UserWhereUniqueInput | null;
  messageSource: string;
  isRead: boolean;
  messageContent: InputJsonValue;
  event?: EventWhereUniqueInput | null;
  messageType:
    | "FOLLOW_FRIEND"
    | "HEALTH_CHECK"
    | "UPDATE_HEALTH"
    | "REGISTER_NEWUSER"
    | "REFER_NEWUSER"
    | "HEALTH_INQUIRY";
  messageAction: string;
};
