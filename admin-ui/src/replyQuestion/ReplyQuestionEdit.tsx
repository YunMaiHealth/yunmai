import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserQuestionTitle } from "../userQuestion/UserQuestionTitle";

export const ReplyQuestionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="userquestion.id"
          reference="UserQuestion"
          label="userQuestion"
        >
          <SelectInput optionText={UserQuestionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
