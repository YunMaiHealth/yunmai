import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { EVENTLOG_TITLE_FIELD } from "../eventLog/EventLogTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const MessageNotifyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MessageNotifies"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
