import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { QUESTION_TITLE_FIELD } from "../question/QuestionTitle";

export const ReplyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
