import { InputJsonValue } from "../../types";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MessageCreateInput = {
  sendTime: Date;
  isNew: boolean;
  messageContent: InputJsonValue;
  messageType: string;
  messageSource: string;
  event?: EventWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
