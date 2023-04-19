import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const StatusList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"statuses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="updateTime" source="updateTime" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <TextField label="intValue" source="intValue" />
        <TextField label="doubleValue" source="doubleValue" />
        <TextField label="stringValue" source="stringValue" />
        <TextField label="dateValue" source="dateValue" />
        <TextField label="jsonValue" source="jsonValue" />
        <TextField label="streamID" source="streamId" />
      </Datagrid>
    </List>
  );
};
