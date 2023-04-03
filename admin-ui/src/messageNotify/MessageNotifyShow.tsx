import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { EVENTLOG_TITLE_FIELD } from "../eventLog/EventLogTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const MessageNotifyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="消息来源" source="messageSource" />
        <TextField label="ID" source="id" />
        <DateField source="sendTime" label="消息发送时间" />
        <BooleanField label="是否已读" source="isNew" />
        <TextField label="消息内容" source="messageContent" />
        <TextField label="消息类别" source="messageType" />
        <ReferenceField
          label="事件日志"
          source="eventlog.id"
          reference="EventLog"
        >
          <TextField source={EVENTLOG_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="用户" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
