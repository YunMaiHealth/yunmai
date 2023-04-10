import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EventTitle } from "../event/EventTitle";
import { UserTitle } from "../user/UserTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="消息发送时间" source="sendTime" disabled />
        <BooleanInput label="是否已读" source="isNew" />
        <div />
        <TextInput label="消息类别" source="messageType" />
        <TextInput label="消息来源" source="messageSource" />
        <ReferenceInput source="event.id" reference="Event" label="事件日志">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="用户">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
