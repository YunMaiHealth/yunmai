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
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { QuestionTitle } from "../question/QuestionTitle";

export const ReplyEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="答复时间" source="replyTime" disabled />
        <TextInput label="问题答复" multiline source="questionReply" />
        <BooleanInput label="是否公开" source="isPublic" />
        <ReferenceInput source="user.id" reference="User" label="答复人">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="question.id"
          reference="Question"
          label="问题记录"
        >
          <SelectInput optionText={QuestionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
