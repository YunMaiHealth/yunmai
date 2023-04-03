import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateInput,
  DateTimeInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  PasswordInput,
} from "react-admin";

import { HubitusCheckupTitle } from "../hubitusCheckup/HubitusCheckupTitle";
import { MessageNotifyTitle } from "../messageNotify/MessageNotifyTitle";
import { UserStatusTitle } from "../userStatus/UserStatusTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="用户头像" source="avatarUrl" />
        <DateInput label="出生年月" source="birthday" />
        <TextInput label="城市" source="city" />
        <TextInput label="国家" source="country" />
        <DateTimeInput label="创建时间" source="creatTime" disabled />
        <SelectInput
          source="gender"
          label="用户性别"
          choices={[
            { label: "unknown", value: "Unknown" },
            { label: "male", value: "Male" },
            { label: "female", value: "Female" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="hubitusCheckups"
          reference="HubitusCheckup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HubitusCheckupTitle} />
        </ReferenceArrayInput>
        <TextInput label="邀请人ID" source="inviterId" />
        <TextInput label="语言" source="language" />
        <DateTimeInput label="最近一次登录时间" source="lastLoginTime" />
        <ReferenceArrayInput
          source="messageNotifies"
          reference="MessageNotify"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MessageNotifyTitle} />
        </ReferenceArrayInput>
        <TextInput label="用户昵称" source="nickName" />
        <TextInput label="第三方登录类型" source="oauthType" />
        <TextInput label="用户的唯一标识" source="openId" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="手机号码" source="phone" />
        <TextInput label="省份" source="province" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="微信登录会话密钥" source="sessionKey" />
        <TextInput label="真实姓名" source="trueName" />
        <TextInput label="用户在微信开放平台的唯一标识符" source="unionId" />
        <TextInput label="用户身份证号" source="userIdCard" />
        <TextInput label="Username" source="username" />
        <ReferenceArrayInput
          source="userStatuses"
          reference="UserStatus"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserStatusTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
