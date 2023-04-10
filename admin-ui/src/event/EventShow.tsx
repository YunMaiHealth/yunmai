import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { EVENT_TITLE_FIELD } from "./EventTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const EventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="eventTime" label="事件发生时间" />
        <TextField label="事件类型" source="eventType" />
        <TextField label="事件名称" source="eventName" />
        <TextField label="事件参数" source="eventParam" />
        <TextField label="事件干系人" source="relateUser" />
        <ReferenceManyField
          reference="Message"
          target="EventId"
          label="Messages"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="sendTime" label="消息发送时间" />
            <BooleanField label="是否已读" source="isNew" />
            <TextField label="消息内容" source="messageContent" />
            <TextField label="消息类别" source="messageType" />
            <TextField label="消息来源" source="messageSource" />
            <ReferenceField
              label="事件日志"
              source="event.id"
              reference="Event"
            >
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="用户" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};