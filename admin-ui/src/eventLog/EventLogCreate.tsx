import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EventLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="事件发生时间" source="eventTime" disabled />
        <TextInput label="事件类型" source="eventType" />
        <TextInput label="事件名称" source="eventName" />
        <div />
        <div />
      </SimpleForm>
    </Create>
  );
};
