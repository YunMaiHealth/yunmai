import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { QuestionTitle } from "../question/QuestionTitle";

export const ReplyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="replyTime" source="replyTime" disabled />
        <ReferenceInput
          source="question.id"
          reference="Question"
          label="question"
        >
          <SelectInput optionText={QuestionTitle} />
        </ReferenceInput>
        <TextInput label="questionReply" multiline source="questionReply" />
        <TextInput label="replyUserID" source="replyUserId" />
        <BooleanInput label="isPublic" source="isPublic" />
      </SimpleForm>
    </Create>
  );
};
