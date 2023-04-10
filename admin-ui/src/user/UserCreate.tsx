import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  SelectInput,
  DateInput,
  ReferenceArrayInput,
} from "react-admin";

import { HubitusTitle } from "../hubitus/HubitusTitle";
import { StatusTitle } from "../status/StatusTitle";
import { MessageTitle } from "../message/MessageTitle";
import { QuestionTitle } from "../question/QuestionTitle";
import { ReplyTitle } from "../reply/ReplyTitle";
import { UsepointTitle } from "../usepoint/UsepointTitle";
import { GetpointTitle } from "../getpoint/GetpointTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="创建时间" source="creatTime" disabled />
        <DateTimeInput label="最近一次登录时间" source="lastLoginTime" />
        <TextInput label="Username" source="username" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="第三方登录类型" source="oauthType" />
        <TextInput label="用户的唯一标识" source="openId" />
        <TextInput label="微信登录会话密钥" source="sessionKey" />
        <TextInput label="用户在微信开放平台的唯一标识符" source="unionId" />
        <TextInput label="邀请人ID" source="inviterId" />
        <TextInput label="手机号码" source="phone" />
        <TextInput label="真实姓名" source="trueName" />
        <TextInput label="用户昵称" source="nickName" />
        <TextInput label="用户头像" source="avatarUrl" />
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
        <DateInput label="出生年月" source="birthday" />
        <TextInput label="用户身份证号" source="userIdCard" />
        <TextInput label="国家" source="country" />
        <TextInput label="省份" source="province" />
        <TextInput label="城市" source="city" />
        <TextInput label="语言" source="language" />
        <ReferenceArrayInput
          source="hubituses"
          reference="Hubitus"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HubitusTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="Statuses"
          reference="Status"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StatusTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="messages"
          reference="Message"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MessageTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="questions"
          reference="Question"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QuestionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="replys"
          reference="Reply"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReplyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="usepoints"
          reference="Usepoint"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UsepointTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="getpoints"
          reference="Getpoint"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GetpointTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
