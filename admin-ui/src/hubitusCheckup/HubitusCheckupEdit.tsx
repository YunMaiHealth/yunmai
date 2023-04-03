import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const HubitusCheckupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="计算结果" source="countResult" />
        <TextInput label="当前体质" source="currentHabitus" />
        <TextInput label="检测建议" source="suggest" />
        <TextInput label="测试结果" source="testResult" />
        <DateTimeInput label="检测时间" source="testTime" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
