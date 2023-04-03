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
        <TextField label="二进制文件" source="blobValue" />
        <TextField label="日期型" source="dateValue" />
        <TextField label="浮点型" source="doubleValue" />
        <TextField label="ID" source="id" />
        <TextField label="数值型" source="intValue" />
        <TextField label="json格式" source="jsonValue" />
        <TextField label="状态名" source="status" />
        <TextField label="业务流水号" source="streamId" />
        <TextField label="字符型" source="stringValue" />
        <DateField source="updateTime" label="状态变化时间" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
