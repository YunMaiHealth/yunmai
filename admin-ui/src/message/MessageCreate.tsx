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
        <SelectInput
          source="messageType"
          label="messageType"
          choices={[
            { label: "FOLLOWFRIEND", value: "FollowFriend" },
            { label: "HEALTHCHECK", value: "HealthCheck" },
            { label: "UPDATEMETAGAS", value: "UpdateMetaGas" },
            { label: "REGISTERNEWUSER", value: "RegisterNewUser" },
            { label: "REFERNEWUSER", value: "ReferNewUser" },
            { label: "HEALTHINQUIRY", value: "HealthInquiry" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="messageSource" source="messageSource" />
      </SimpleForm>
    </Create>
  );
};
