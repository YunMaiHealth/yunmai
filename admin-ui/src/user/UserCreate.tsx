import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  DateInput,
  PasswordInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceArrayInput,
} from "react-admin";

import { HubitusTitle } from "../hubitus/HubitusTitle";
import { StatusTitle } from "../status/StatusTitle";
import { GetpointTitle } from "../getpoint/GetpointTitle";
import { UsepointTitle } from "../usepoint/UsepointTitle";
import { MessageTitle } from "../message/MessageTitle";
import { InquiryTitle } from "../inquiry/InquiryTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="oauthType" source="oauthType" />
        <TextInput label="nickName" source="nickName" />
        <TextInput label="openID" source="openId" />
        <TextInput label="sessionKey" source="sessionKey" />
        <TextInput label="unionID" source="unionId" />
        <TextInput label="InviterID" source="inviterId" />
        <TextInput label="phone" source="phone" />
        <SelectInput
          source="gender"
          label="gender"
          choices={[
            { label: "unknown", value: "Unknown" },
            { label: "male", value: "Male" },
            { label: "female", value: "Female" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="avatarUrl" source="avatarUrl" />
        <DateInput label="birthday" source="birthday" />
        <TextInput label="identitycard" source="identitycard" />
        <TextInput label="country" source="country" />
        <TextInput label="language" source="language" />
        <TextInput label="province" source="province" />
        <TextInput label="city" source="city" />
        <TextInput label="realname" source="realName" />
        <TextInput label="Username" source="username" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="创建时间" source="creatTime" disabled />
        <DateTimeInput
          label="最近一次登录时间"
          source="lastLoginTime"
          disabled
        />
        <ReferenceArrayInput
          source="hubituses"
          reference="Hubitus"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HubitusTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="statuses"
          reference="Status"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StatusTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="getpoints"
          reference="Getpoint"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GetpointTitle} />
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
          source="messages"
          reference="Message"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MessageTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="questions"
          reference="Inquiry"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InquiryTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
