import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const EventLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="eventTime" label="事件发生时间" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="事件类型" source="eventType" />
        <TextField label="事件名称" source="eventName" />
        <TextField label="事件参数" source="eventParam" />
        <TextField label="事件干系人" source="relateUser" />
      </SimpleShowLayout>
    </Show>
  );
};
