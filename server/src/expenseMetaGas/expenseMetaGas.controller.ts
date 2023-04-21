import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExpenseMetaGasService } from "./expenseMetaGas.service";
import { ExpenseMetaGasControllerBase } from "./base/expenseMetaGas.controller.base";

@swagger.ApiTags("expenseMetaGases")
@common.Controller("expenseMetaGases")
export class ExpenseMetaGasController extends ExpenseMetaGasControllerBase {
  constructor(
    protected readonly service: ExpenseMetaGasService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
