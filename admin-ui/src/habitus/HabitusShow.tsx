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

export const HabitusShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="testTime" label="testTime" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="currentHabitus" source="currentHabitus" />
        <TextField label="testResult" source="testResult" />
        <TextField label="countResult" source="countResult" />
        <TextField label="suggest" source="suggest" />
      </SimpleShowLayout>
    </Show>
  );
};
