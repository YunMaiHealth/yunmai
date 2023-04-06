import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { QUESTION_TITLE_FIELD } from "./QuestionTitle";

export const QuestionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="questionTime" label="提问时间" />
        <TextField label="问题标题" source="questionTitle" />
        <TextField label="问题内容" source="questionContent" />
        <TextField label="是否公开" source="isPublic" />
        <ReferenceField label="用户" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Reply"
          target="QuestionId"
          label="Replys"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="replyTime" label="答复时间" />
            <TextField label="问题答复" source="questionReply" />
            <TextField label="是否公开" source="isPublic" />
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
