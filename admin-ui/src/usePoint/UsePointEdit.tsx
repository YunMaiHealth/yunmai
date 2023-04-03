import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const UsePointEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="元气使用时间" source="usePointTime" disabled />
        <NumberInput step={1} label="元气使用值" source="usePoint" />
        <TextInput label="元气使用类型" source="usePointType" />
        <ReferenceInput source="user.id" reference="User" label="用户">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
