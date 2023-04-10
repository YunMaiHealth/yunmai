import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USERQUESTION_TITLE_FIELD } from "../userQuestion/UserQuestionTitle";

export const ReplyQuestionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"replyQuestions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="userQuestion"
          source="userquestion.id"
          reference="UserQuestion"
        >
          <TextField source={USERQUESTION_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
