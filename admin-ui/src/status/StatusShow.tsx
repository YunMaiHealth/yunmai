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
      </SimpleShowLayout>
    </Show>
  );
};
