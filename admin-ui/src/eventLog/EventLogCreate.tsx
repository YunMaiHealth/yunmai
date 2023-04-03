import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MessageNotifyTitle } from "../messageNotify/MessageNotifyTitle";

export const EventLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="事件名称" source="eventName" />
        <div />
        <DateTimeInput label="事件发生时间" source="eventTime" disabled />
        <TextInput label="事件类型" source="eventType" />
        <ReferenceArrayInput
          source="messageNotifies"
          reference="MessageNotify"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MessageNotifyTitle} />
        </ReferenceArrayInput>
        <div />
      </SimpleForm>
    </Create>
  );
};
