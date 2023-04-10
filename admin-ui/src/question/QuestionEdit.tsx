import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { ReplyTitle } from "../reply/ReplyTitle";

export const QuestionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="提问时间" source="questionTime" disabled />
        <TextInput label="问题内容" multiline source="questionContent" />
        <BooleanInput label="是否公开" source="isPublic" />
        <ReferenceInput source="user.id" reference="User" label="用户">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="replyQuestions"
          reference="Reply"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReplyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
