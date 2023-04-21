import { Habitus as THabitus } from "../api/habitus/Habitus";

export const HABITUS_TITLE_FIELD = "currentHabitus";

export const HabitusTitle = (record: THabitus): string => {
  return record.currentHabitus || String(record.id);
};
