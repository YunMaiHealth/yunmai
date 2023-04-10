import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MessageNotifyTitle } from "../messageNotify/MessageNotifyTitle";

export const EventLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="eventTime" source="eventTime" disabled />
        <ReferenceInput
          source="messagenotify.id"
          reference="MessageNotify"
          label="messageNotifies"
        >
          <SelectInput optionText={MessageNotifyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
