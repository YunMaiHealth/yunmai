import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="creatTime" label="创建时间" />
        <DateField source="lastLoginTime" label="最后一次修改时间" />
        <TextField label="真实姓名" source="trueName" />
        <TextField label="Username" source="username" />
        <TextField label="Roles" source="roles" />
      </SimpleShowLayout>
    </Show>
  );
};
