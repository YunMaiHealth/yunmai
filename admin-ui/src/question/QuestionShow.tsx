import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { QUESTION_TITLE_FIELD } from "./QuestionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const QuestionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="questionTime" label="questionTime" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="questionContent" source="questionContent" />
        <BooleanField label="isPublic" source="isPublic" />
        <ReferenceManyField
          reference="Reply"
          target="QuestionId"
          label="replies"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="replyTime" label="replyTime" />
            <ReferenceField
              label="question"
              source="question.id"
              reference="Question"
            >
              <TextField source={QUESTION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="questionReply" source="questionReply" />
            <TextField label="replyUserID" source="replyUserId" />
            <BooleanField label="isPublic" source="isPublic" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
