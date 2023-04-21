import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExpenseMataGasService } from "./expenseMataGas.service";
import { ExpenseMataGasControllerBase } from "./base/expenseMataGas.controller.base";

@swagger.ApiTags("expenseMataGases")
@common.Controller("expenseMataGases")
export class ExpenseMataGasController extends ExpenseMataGasControllerBase {
  constructor(
    protected readonly service: ExpenseMataGasService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
