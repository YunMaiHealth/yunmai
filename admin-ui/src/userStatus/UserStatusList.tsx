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

export const UserStatusList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"UserStatuses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updateTime" label="状态变化时间" />
        <TextField label="状态名" source="status" />
        <TextField label="数值型" source="intValue" />
        <TextField label="浮点型" source="doubleValue" />
        <TextField label="字符型" source="stringValue" />
        <TextField label="日期型" source="dateValue" />
        <TextField label="json格式" source="jsonValue" />
        <TextField label="二进制文件" source="blobValue" />
        <TextField label="业务流水号" source="streamId" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
