import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const StatusEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
