import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { ReplyTitle } from "../reply/ReplyTitle";

export const QuestionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="questionTime" source="questionTime" disabled />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="replies"
          reference="Reply"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReplyTitle} />
        </ReferenceArrayInput>
        <TextInput label="questionContent" multiline source="questionContent" />
        <BooleanInput label="isPublic" source="isPublic" />
      </SimpleForm>
    </Create>
  );
};
