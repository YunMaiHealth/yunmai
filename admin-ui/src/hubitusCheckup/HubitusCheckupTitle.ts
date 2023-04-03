import { HubitusCheckup as THubitusCheckup } from "../api/hubitusCheckup/HubitusCheckup";

export const HUBITUSCHECKUP_TITLE_FIELD = "countResult";

export const HubitusCheckupTitle = (record: THubitusCheckup): string => {
  return record.countResult || String(record.id);
};
