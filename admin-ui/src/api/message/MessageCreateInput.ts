import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type MessageCreateInput = {
  sendTime: Date;
  user?: UserWhereUniqueInput | null;
  event?: EventWhereUniqueInput | null;
  isRead: boolean;
  messageContent: InputJsonValue;
  messageType: string;
  messageSource: string;
};
