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
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { USERQUESTION_TITLE_FIELD } from "../userQuestion/UserQuestionTitle";

export const ReplyQuestionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ReplyQuestions"}
      perPage={50}
      pagination={<Pagination />}
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
          source="userquestion.id"
          reference="UserQuestion"
        >
          <TextField source={USERQUESTION_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
