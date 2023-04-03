import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { UserQuestionTitle } from "../userQuestion/UserQuestionTitle";

export const ReplyQuestionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="答复时间" source="replyTime" disabled />
        <TextInput label="问题答复" source="questionReply" />
        <TextInput label="是否公开" source="isPublic" />
        <ReferenceInput source="user.id" reference="User" label="答复人">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="userquestion.id"
          reference="UserQuestion"
          label="问题记录"
        >
          <SelectInput optionText={UserQuestionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
