import { HubitusCheckup as THubitusCheckup } from "../api/hubitusCheckup/HubitusCheckup";

export const HUBITUSCHECKUP_TITLE_FIELD = "currentHabitus";

export const HubitusCheckupTitle = (record: THubitusCheckup): string => {
  return record.currentHabitus || String(record.id);
};
