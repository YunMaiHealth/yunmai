import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="creatTime" label="创建时间" />
        <DateField source="lastLoginTime" label="最近一次登录时间" />
        <TextField label="真实姓名" source="trueName" />
        <TextField label="Username" source="username" />
        <TextField label="Roles" source="roles" />
        <TextField label="oauthType" source="oauthType" />
        <TextField label="openID" source="openId" />
        <TextField label="sessionKey" source="sessionKey" />
        <TextField label="unionID" source="unionId" />
        <TextField label="InviterID" source="inviterId" />
        <TextField label="phone" source="phone" />
        <TextField label="nickName" source="nickName" />
        <TextField label="avatarUrl" source="avatarUrl" />
        <TextField label="gender" source="gender" />
        <TextField label="birthday" source="birthday" />
        <TextField label="userIDCard" source="userIdCard" />
        <TextField label="country" source="country" />
        <TextField label="province" source="province" />
        <TextField label="city" source="city" />
        <TextField label="language" source="language" />
      </Datagrid>
    </List>
  );
};
