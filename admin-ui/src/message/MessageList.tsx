import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { EVENT_TITLE_FIELD } from "../event/EventTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const MessageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Messages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="sendTime" label="消息发送时间" />
        <BooleanField label="是否已读" source="isNew" />
        <TextField label="消息内容" source="messageContent" />
        <TextField label="消息类别" source="messageType" />
        <TextField label="消息来源" source="messageSource" />
        <ReferenceField label="事件日志" source="event.id" reference="Event">
          <TextField source={EVENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="用户" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
