import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MessageNotifyTitle } from "../messageNotify/MessageNotifyTitle";

export const EventLogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="eventTime" source="eventTime" disabled />
        <ReferenceInput
          source="messagenotify.id"
          reference="MessageNotify"
          label="messageNotifies"
        >
          <SelectInput optionText={MessageNotifyTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
