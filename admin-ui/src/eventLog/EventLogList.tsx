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
import { MESSAGENOTIFY_TITLE_FIELD } from "../messageNotify/MessageNotifyTitle";

export const EventLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"eventLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="eventTime" label="eventTime" />
        <ReferenceField
          label="messageNotifies"
          source="messagenotify.id"
          reference="MessageNotify"
        >
          <TextField source={MESSAGENOTIFY_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
