import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { ReplyQuestionTitle } from "../replyQuestion/ReplyQuestionTitle";

export const UserQuestionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="提问时间" source="questionTime" disabled />
        <TextInput label="问题标题" source="questionTitle" />
        <TextInput label="问题内容" source="questionContent" />
        <TextInput label="是否公开" source="isPublic" />
        <ReferenceInput source="user.id" reference="User" label="用户">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="replyQuestions"
          reference="ReplyQuestion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReplyQuestionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
