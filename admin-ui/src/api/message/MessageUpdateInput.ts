import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type MessageUpdateInput = {
  sendTime?: Date;
  user?: UserWhereUniqueInput | null;
  event?: EventWhereUniqueInput | null;
  isNew?: boolean;
  messageContent?: InputJsonValue;
  messageType?: string;
  messageSource?: string;
};
