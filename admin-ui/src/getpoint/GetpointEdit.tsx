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

export const GetpointEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="元气获取时间" source="getPointTime" disabled />
        <NumberInput step={1} label="获取元气值" source="getPoint" />
        <TextInput label="元气获取类型" source="getPointType" />
        <ReferenceInput source="user.id" reference="User" label="用户">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
