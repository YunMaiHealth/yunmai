import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { EventLogTitle } from "../eventLog/EventLogTitle";

export const MessageNotifyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="eventlog.id"
          reference="EventLog"
          label="eventLog"
        >
          <SelectInput optionText={EventLogTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
