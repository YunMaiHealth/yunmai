import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { EVENTLOG_TITLE_FIELD } from "./EventLogTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const EventLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="事件名称" source="eventName" />
        <TextField label="事件参数" source="eventParam" />
        <DateField source="eventTime" label="事件发生时间" />
        <TextField label="事件类型" source="eventType" />
        <TextField label="ID" source="id" />
        <TextField label="事件干系人" source="relateUser" />
        <ReferenceManyField
          reference="MessageNotify"
          target="EventLogId"
          label="MessageNotifies"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="事件日志"
              source="eventlog.id"
              reference="EventLog"
            >
              <TextField source={EVENTLOG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="是否已读" source="isNew" />
            <TextField label="消息内容" source="messageContent" />
            <TextField label="消息来源" source="messageSource" />
            <TextField label="消息类别" source="messageType" />
            <DateField source="sendTime" label="消息发送时间" />
            <ReferenceField label="用户" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
