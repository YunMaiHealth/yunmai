import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { MESSAGENOTIFY_TITLE_FIELD } from "../messageNotify/MessageNotifyTitle";

export const EventLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="eventTime" label="eventTime" />
        <ReferenceField
          label="messageNotifies"
          source="messagenotify.id"
          reference="MessageNotify"
        >
          <TextField source={MESSAGENOTIFY_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
