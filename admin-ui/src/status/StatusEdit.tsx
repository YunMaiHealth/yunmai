import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const StatusEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="状态变化时间" source="updateTime" disabled />
        <TextInput label="状态名" source="status" />
        <NumberInput step={1} label="数值型" source="intValue" />
        <NumberInput label="浮点型" source="doubleValue" />
        <TextInput label="字符型" source="stringValue" />
        <DateTimeInput label="日期型" source="dateValue" />
        <div />
        <TextInput label="业务流水号" source="streamId" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
