import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { EventLogTitle } from "../eventLog/EventLogTitle";
import { UserTitle } from "../user/UserTitle";

export const MessageNotifyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="eventlog.id"
          reference="EventLog"
          label="事件日志"
        >
          <SelectInput optionText={EventLogTitle} />
        </ReferenceInput>
        <BooleanInput label="是否已读" source="isNew" />
        <TextInput label="消息内容" source="messageContent" />
        <TextInput label="消息来源" source="messageSource" />
        <TextInput label="消息类别" source="messageType" />
        <DateTimeInput label="消息发送时间" source="sendTime" disabled />
        <ReferenceInput source="user.id" reference="User" label="用户">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
