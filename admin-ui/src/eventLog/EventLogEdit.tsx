import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const EventLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="事件发生时间" source="eventTime" disabled />
        <TextInput label="事件类型" source="eventType" />
        <TextInput label="事件名称" source="eventName" />
        <div />
        <div />
      </SimpleForm>
    </Edit>
  );
};
