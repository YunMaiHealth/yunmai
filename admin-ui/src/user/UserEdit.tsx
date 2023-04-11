import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceArrayInput,
  SelectInput,
  DateInput,
} from "react-admin";

import { HubitusTitle } from "../hubitus/HubitusTitle";
import { StatusTitle } from "../status/StatusTitle";
import { GetpointTitle } from "../getpoint/GetpointTitle";
import { UsepointTitle } from "../usepoint/UsepointTitle";
import { MessageTitle } from "../message/MessageTitle";
import { QuestionTitle } from "../question/QuestionTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="创建时间" source="creatTime" disabled />
        <DateTimeInput
          label="最近一次登录时间"
          source="lastLoginTime"
          disabled
        />
        <TextInput label="真实姓名" source="trueName" />
        <TextInput label="Username" source="username" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
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
          reference="Question"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QuestionTitle} />
        </ReferenceArrayInput>
        <TextInput label="oauthType" source="oauthType" />
        <TextInput label="openID" source="openId" />
        <TextInput label="sessionKey" source="sessionKey" />
        <TextInput label="unionID" source="unionId" />
        <TextInput label="InviterID" source="inviterId" />
        <TextInput label="phone" source="phone" />
        <TextInput label="nickName" source="nickName" />
        <TextInput label="avatarUrl" source="avatarUrl" />
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
        <DateInput label="birthday" source="birthday" />
        <TextInput label="userIDCard" source="userIdCard" />
        <TextInput label="country" source="country" />
        <TextInput label="province" source="province" />
        <TextInput label="city" source="city" />
        <TextInput label="language" source="language" />
      </SimpleForm>
    </Edit>
  );
};
