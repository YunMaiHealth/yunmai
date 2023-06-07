import { Module, forwardRef } from "@nestjs/common";
import { NftResolver } from "./nft.resolver";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports: [HttpModule],
    controllers: [],
    providers: [NftResolver],
    exports: [NftResolver],
  })
  export class NftModule {}
  