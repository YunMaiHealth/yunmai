import { Hubitus as THubitus } from "../api/hubitus/Hubitus";

export const HUBITUS_TITLE_FIELD = "currentHabitus";

export const HubitusTitle = (record: THubitus): string => {
  return record.currentHabitus || String(record.id);
};
