import { MessageNotifyWhereInput } from "./MessageNotifyWhereInput";
import { MessageNotifyOrderByInput } from "./MessageNotifyOrderByInput";

export type MessageNotifyFindManyArgs = {
  where?: MessageNotifyWhereInput;
  orderBy?: Array<MessageNotifyOrderByInput>;
  skip?: number;
  take?: number;
};
