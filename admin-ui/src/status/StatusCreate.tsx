import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const StatusCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="updateTime" source="updateTime" disabled />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="status" source="status" />
        <NumberInput step={1} label="intValue" source="intValue" />
        <NumberInput label="doubleValue" source="doubleValue" />
        <TextInput label="stringValue" source="stringValue" />
        <DateTimeInput label="dateValue" source="dateValue" />
        <div />
        <TextInput label="streamID" source="streamId" />
      </SimpleForm>
    </Create>
  );
};
