import { Hubitus as THubitus } from "../api/hubitus/Hubitus";

export const HUBITUS_TITLE_FIELD = "id";

export const HubitusTitle = (record: THubitus): string => {
  return record.id || String(record.id);
};
