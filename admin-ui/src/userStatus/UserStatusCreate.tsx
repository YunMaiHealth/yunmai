import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const UserStatusCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="状态变化时间" source="updateTime" disabled />
        <TextInput label="状态名" source="status" />
        <NumberInput step={1} label="数值型" source="intValue" />
        <NumberInput label="浮点型" source="doubleValue" />
        <TextInput label="字符型" source="stringValue" />
        <DateTimeInput label="日期型" source="dateValue" />
        <div />
        <TextInput label="二进制文件" multiline source="blobValue" />
        <TextInput label="业务流水号" source="streamId" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
