import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
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
        <TextInput label="messageSource" source="messageSource" />
        <BooleanInput label="isRead" source="isRead" />
        <div />
        <ReferenceInput source="event.id" reference="Event" label="event">
          <SelectInput optionText={EventTitle} />
        </ReferenceInput>
        <SelectInput
          source="messageType"
          label="messageType"
          choices={[
            { label: "FOLLOW_FRIEND", value: "FOLLOW_FRIEND" },
            { label: "HEALTH_CHECK", value: "HEALTH_CHECK" },
            { label: "UPDATE_HEALTH", value: "UPDATE_HEALTH" },
            { label: "REGISTER_NEWUSER", value: "REGISTER_NEWUSER" },
            { label: "REFER_NEWUSER", value: "REFER_NEWUSER" },
            { label: "HEALTH_INQUIRY", value: "HEALTH_INQUIRY" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="messageAction" source="messageAction" />
      </SimpleForm>
    </Create>
  );
};
