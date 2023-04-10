import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { MESSAGENOTIFY_TITLE_FIELD } from "./MessageNotifyTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const MessageNotifyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="sendTime" label="sendTime" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="messageSource" source="messageSource" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="EventLog"
          target="MessageNotifyId"
          label="eventLogs"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="eventTime" label="eventTime" />
            <ReferenceField
              label="messageNotifies"
              source="messagenotify.id"
              reference="MessageNotify"
            >
              <TextField source={MESSAGENOTIFY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
