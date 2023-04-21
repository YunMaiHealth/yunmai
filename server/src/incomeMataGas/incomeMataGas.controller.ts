import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IncomeMataGasService } from "./incomeMataGas.service";
import { IncomeMataGasControllerBase } from "./base/incomeMataGas.controller.base";

@swagger.ApiTags("incomeMataGases")
@common.Controller("incomeMataGases")
export class IncomeMataGasController extends IncomeMataGasControllerBase {
  constructor(
    protected readonly service: IncomeMataGasService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
