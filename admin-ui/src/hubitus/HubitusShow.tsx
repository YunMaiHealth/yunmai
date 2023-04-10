import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const HubitusShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="当前体质" source="currentHabitus" />
        <TextField label="测试结果" source="testResult" />
        <TextField label="计算结果" source="countResult" />
        <TextField label="检测建议" source="suggest" />
        <TextField label="检测时间" source="testTime" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
