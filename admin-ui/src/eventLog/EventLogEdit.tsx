import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MessageNotifyTitle } from "../messageNotify/MessageNotifyTitle";

export const EventLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="事件发生时间" source="eventTime" disabled />
        <TextInput label="事件类型" source="eventType" />
        <TextInput label="事件名称" source="eventName" />
        <div />
        <div />
        <ReferenceArrayInput
          source="messageNotifies"
          reference="MessageNotify"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MessageNotifyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
