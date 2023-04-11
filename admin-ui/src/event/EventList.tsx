import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"events"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="eventTime" label="eventTime" />
        <TextField label="eventType" source="eventType" />
        <TextField label="eventName" source="eventName" />
        <TextField label="eventParam" source="eventParam" />
        <TextField label="relateUser" source="relateUser" />
      </Datagrid>
    </List>
  );
};
