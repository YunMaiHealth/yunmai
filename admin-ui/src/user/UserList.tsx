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
        <TextField label="oauthType" source="oauthType" />
        <TextField label="nickName" source="nickName" />
        <TextField label="openID" source="openId" />
        <TextField label="sessionKey" source="sessionKey" />
        <TextField label="unionID" source="unionId" />
        <TextField label="InviterID" source="inviterId" />
        <TextField label="phone" source="phone" />
        <TextField label="gender" source="gender" />
        <TextField label="avatarUrl" source="avatarUrl" />
        <TextField label="birthday" source="birthday" />
        <TextField label="identitycard" source="identitycard" />
        <TextField label="country" source="country" />
        <TextField label="language" source="language" />
        <TextField label="province" source="province" />
        <TextField label="city" source="city" />
        <TextField label="ID" source="id" />
        <TextField label="realname" source="realName" />
        <TextField label="Username" source="username" />
        <TextField label="Roles" source="roles" />
        <DateField source="creatTime" label="创建时间" />
        <DateField source="lastLoginTime" label="最近一次登录时间" />
      </Datagrid>
    </List>
  );
};
