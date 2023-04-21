import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { EventTitle } from "../event/EventTitle";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="sendTime" source="sendTime" disabled />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="event.id" reference="Event" label="event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <BooleanInput label="isRead" source="isRead" />
        <div />
        <TextInput label="messageType" source="messageType" />
        <TextInput label="messageSource" source="messageSource" />
      </SimpleForm>
    </Create>
  );
};
