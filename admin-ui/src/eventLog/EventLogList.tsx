import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EventLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"EventLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="eventTime" label="事件发生时间" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="事件类型" source="eventType" />
        <TextField label="事件名称" source="eventName" />
        <TextField label="事件参数" source="eventParam" />
        <TextField label="事件干系人" source="relateUser" />
      </Datagrid>
    </List>
  );
};
