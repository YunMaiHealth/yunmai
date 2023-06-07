import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserModule } from "../user/user.module";
import { GatewatModule } from "../ws/ws.model";
import { RegisterResolver } from "./register.resolver";
import { IncomeMetaGasResolver } from "../incomeMetaGas/incomeMetaGas.resolver";

@Module({
    imports: [
      GatewatModule, 
      forwardRef(() => AuthModule), 
      forwardRef(() => UserModule)],
    controllers: [],
    providers: [RegisterResolver],
    exports: [RegisterResolver],
  })
  export class RegisterModule {}