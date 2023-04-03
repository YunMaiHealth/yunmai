import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { EVENTLOG_TITLE_FIELD } from "../eventLog/EventLogTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="用户头像" source="avatarUrl" />
        <TextField label="出生年月" source="birthday" />
        <TextField label="城市" source="city" />
        <TextField label="国家" source="country" />
        <DateField source="creatTime" label="创建时间" />
        <TextField label="用户性别" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="邀请人ID" source="inviterId" />
        <TextField label="语言" source="language" />
        <TextField label="最近一次登录时间" source="lastLoginTime" />
        <TextField label="用户昵称" source="nickName" />
        <TextField label="第三方登录类型" source="oauthType" />
        <TextField label="用户的唯一标识" source="openId" />
        <TextField label="手机号码" source="phone" />
        <TextField label="省份" source="province" />
        <TextField label="Roles" source="roles" />
        <TextField label="微信登录会话密钥" source="sessionKey" />
        <TextField label="真实姓名" source="trueName" />
        <TextField label="用户在微信开放平台的唯一标识符" source="unionId" />
        <TextField label="用户身份证号" source="userIdCard" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="HubitusCheckup"
          target="UserId"
          label="HubitusCheckups"
        >
          <Datagrid rowClick="show">
            <TextField label="计算结果" source="countResult" />
            <TextField label="当前体质" source="currentHabitus" />
            <TextField label="ID" source="id" />
            <TextField label="检测建议" source="suggest" />
            <TextField label="测试结果" source="testResult" />
            <TextField label="检测时间" source="testTime" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MessageNotify"
          target="UserId"
          label="MessageNotifies"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="事件日志"
              source="eventlog.id"
              reference="EventLog"
            >
              <TextField source={EVENTLOG_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <BooleanField label="是否已读" source="isNew" />
            <TextField label="消息内容" source="messageContent" />
            <TextField label="消息来源" source="messageSource" />
            <TextField label="消息类别" source="messageType" />
            <DateField source="sendTime" label="消息发送时间" />
            <ReferenceField label="用户" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserStatus"
          target="UserId"
          label="UserStatuses"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
