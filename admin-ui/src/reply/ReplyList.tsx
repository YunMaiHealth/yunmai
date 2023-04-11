import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { QUESTION_TITLE_FIELD } from "../question/QuestionTitle";

export const ReplyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"replies"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
