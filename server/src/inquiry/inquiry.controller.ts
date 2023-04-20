import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { InquiryService } from "./inquiry.service";
import { InquiryControllerBase } from "./base/inquiry.controller.base";

@swagger.ApiTags("inquiries")
@common.Controller("inquiries")
export class InquiryController extends InquiryControllerBase {
  constructor(
    protected readonly service: InquiryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
