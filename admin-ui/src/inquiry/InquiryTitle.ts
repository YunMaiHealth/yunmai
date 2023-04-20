import { Inquiry as TInquiry } from "../api/inquiry/Inquiry";

export const INQUIRY_TITLE_FIELD = "title";

export const InquiryTitle = (record: TInquiry): string => {
  return record.title || String(record.id);
};
