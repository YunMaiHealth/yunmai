import { Test as TTest } from "../api/test/Test";

export const TEST_TITLE_FIELD = "testName";

export const TestTitle = (record: TTest): string => {
  return record.testName || String(record.id);
};
