import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { IncomeMetaGasService } from "./incomeMetaGas.service";
import { IncomeMetaGasControllerBase } from "./base/incomeMetaGas.controller.base";

@swagger.ApiTags("incomeMetaGases")
@common.Controller("incomeMetaGases")
export class IncomeMetaGasController extends IncomeMetaGasControllerBase {
  constructor(
    protected readonly service: IncomeMetaGasService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
