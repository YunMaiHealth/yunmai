import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const StatusShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="updateTime" label="状态变化时间" />
        <TextField label="状态名" source="status" />
        <TextField label="数值型" source="intValue" />
        <TextField label="浮点型" source="doubleValue" />
        <TextField label="字符型" source="stringValue" />
        <TextField label="日期型" source="dateValue" />
        <TextField label="json格式" source="jsonValue" />
        <TextField label="业务流水号" source="streamId" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
