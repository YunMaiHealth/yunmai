import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const HubitusCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="当前体质" source="currentHabitus" />
        <div />
        <div />
        <TextInput label="检测建议" multiline source="suggest" />
        <DateTimeInput label="检测时间" source="testTime" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
