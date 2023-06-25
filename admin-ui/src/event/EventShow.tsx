import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { EVENT_TITLE_FIELD } from "./EventTitle";

export const EventShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="eventTime" label="eventTime" />
        <TextField label="eventType" source="eventType" />
        <TextField label="eventName" source="eventName" />
        <TextField label="eventParam" source="eventParam" />
        <TextField label="relateUser" source="relateUser" />
        <ReferenceManyField
          reference="Message"
          target="EventId"
          label="messages"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="sendTime" label="sendTime" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="isRead" source="isRead" />
            <TextField label="messageContent" source="messageContent" />
            <TextField label="messageType" source="messageType" />
            <TextField label="messageSource" source="messageSource" />
            <TextField label="action" source="action" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
