import { Module } from "@nestjs/common";
import { InquiryModuleBase } from "./base/inquiry.module.base";
import { InquiryService } from "./inquiry.service";
import { InquiryController } from "./inquiry.controller";
import { InquiryResolver } from "./inquiry.resolver";

@Module({
  imports: [InquiryModuleBase],
  controllers: [InquiryController],
  providers: [InquiryService, InquiryResolver],
  exports: [InquiryService],
})
export class InquiryModule {}
