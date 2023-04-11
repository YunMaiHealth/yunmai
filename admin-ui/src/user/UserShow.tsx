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
import { EVENT_TITLE_FIELD } from "../event/EventTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Hubitus"
          target="UserId"
          label="hubituses"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="testTime" label="testTime" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="currentHabitus" source="currentHabitus" />
            <TextField label="testResult" source="testResult" />
            <TextField label="countResult" source="countResult" />
            <TextField label="suggest" source="suggest" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Status" target="UserId" label="statuses">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="updateTime" label="updateTime" />
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="Getpoint"
          target="UserId"
          label="getpoints"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Usepoint"
          target="UserId"
          label="usepoints"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Message"
          target="UserId"
          label="messages"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="sendTime" label="sendTime" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="isNew" source="isNew" />
            <TextField label="messageContent" source="messageContent" />
            <TextField label="messageType" source="messageType" />
            <TextField label="messageSource" source="messageSource" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Question"
          target="UserId"
          label="questions"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
