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
        <TextField label="Username" source="username" />
        <TextField label="Roles" source="roles" />
        <TextField label="第三方登录类型" source="oauthType" />
        <TextField label="用户的唯一标识" source="openId" />
        <TextField label="微信登录会话密钥" source="sessionKey" />
        <TextField label="用户在微信开放平台的唯一标识符" source="unionId" />
        <TextField label="真实姓名" source="trueName" />
        <TextField label="邀请人ID" source="inviterId" />
        <TextField label="手机号码" source="phone" />
        <TextField label="省份" source="province" />
        <TextField label="用户昵称" source="nickName" />
        <TextField label="用户头像" source="avatarUrl" />
        <TextField label="用户性别" source="gender" />
        <TextField label="出生年月" source="birthday" />
        <TextField label="城市" source="city" />
        <TextField label="用户身份证号" source="userIdCard" />
        <TextField label="国家" source="country" />
        <TextField label="语言" source="language" />
        <DateField source="creatTime" label="创建时间" />
        <TextField label="最近一次登录时间" source="lastLoginTime" />
      </Datagrid>
    </List>
  );
};
