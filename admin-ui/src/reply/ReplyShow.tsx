import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { QUESTION_TITLE_FIELD } from "../question/QuestionTitle";

export const ReplyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="replyTime" label="答复时间" />
        <TextField label="问题答复" source="questionReply" />
        <BooleanField label="是否公开" source="isPublic" />
        <ReferenceField label="答复人" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="问题记录"
          source="question.id"
          reference="Question"
        >
          <TextField source={QUESTION_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
