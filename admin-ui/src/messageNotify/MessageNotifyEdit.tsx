import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { EventLogTitle } from "../eventLog/EventLogTitle";

export const MessageNotifyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
