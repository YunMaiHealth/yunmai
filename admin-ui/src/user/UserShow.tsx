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
        <TextField label="oauthType" source="oauthType" />
        <TextField label="nickName" source="nickName" />
        <TextField label="sessionKey" source="sessionKey" />
        <TextField label="InviterID" source="inviterId" />
        <TextField label="phone" source="phone" />
        <TextField label="gender" source="gender" />
        <TextField label="openID" source="openId" />
        <TextField label="avatarUrl" source="avatarUrl" />
        <TextField label="unionID" source="unionId" />
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
        <ReferenceManyField
          reference="Habitus"
          target="UserId"
          label="habituses"
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
          reference="IncomeMetaGas"
          target="UserId"
          label="IncomeMetaGases"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="income_date" label="income_date" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="amount" source="amount" />
            <TextField label="category" source="category" />
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
            <TextField label="messageSource" source="messageSource" />
            <BooleanField label="isRead" source="isRead" />
            <TextField label="messageContent" source="messageContent" />
            <ReferenceField label="event" source="event.id" reference="Event">
              <TextField source={EVENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="messageType" source="messageType" />
            <TextField label="messageAction" source="messageAction" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ExpenseMetaGas"
          target="UserId"
          label="ExpenseMetaGases"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="expense_date" label="expense_date" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="amount" source="amount" />
            <TextField label="category" source="category" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Inquiry"
          target="UserId"
          label="inquirys"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="inquiryTime" label="inquiryTime" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="content" source="content" />
            <BooleanField label="isPublic" source="isPublic" />
            <TextField label="title" source="title" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
