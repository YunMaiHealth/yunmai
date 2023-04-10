import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserQuestionTitle } from "../userQuestion/UserQuestionTitle";

export const ReplyQuestionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="userquestion.id"
          reference="UserQuestion"
          label="userQuestion"
        >
          <SelectInput optionText={UserQuestionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
