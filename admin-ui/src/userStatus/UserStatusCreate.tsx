import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const UserStatusCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="二进制文件" multiline source="blobValue" />
        <DateTimeInput label="日期型" source="dateValue" />
        <NumberInput label="浮点型" source="doubleValue" />
        <NumberInput step={1} label="数值型" source="intValue" />
        <div />
        <TextInput label="状态名" source="status" />
        <TextInput label="业务流水号" source="streamId" />
        <TextInput label="字符型" source="stringValue" />
        <DateTimeInput label="状态变化时间" source="updateTime" disabled />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
