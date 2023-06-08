import * as graphql from "@nestjs/graphql";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HttpService } from '@nestjs/axios';
import { Conflux, Drip } from "js-conflux-sdk"
import { AclFilterResponseInterceptor } from "../interceptors/aclFilterResponse.interceptor";
import * as nestAccessControl from "nest-access-control";
import { Nft } from "./Nft";
import { NftArgs } from "./NftArgs";
import { Observable, lastValueFrom } from "rxjs";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Event)
export class NftResolver {

  constructor(private readonly httpService: HttpService) { }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Nft)
  @nestAccessControl.UseRoles({
    resource: "Inquiry",
    action: "read",
    possession: "any",
  })
  async nftInfo(
    @graphql.Args() args: NftArgs
  ): Promise<Nft> {
    
    let nft = 0   // nft数量
    let danList = []  //丹药信息集合
    let yaoList = []  //药材信息集合
    let nftInfo = new Nft();  //返回值集合
    //获取余额
    let balance = await this.getBalance(args.owner)
    nftInfo.banlance = Number(balance).toFixed(2)

    //获取Tokens（tokens中包含丹药、药材的详细信息）
    const observable = this.getTokens(args.contract, args.owner);
    const response = await lastValueFrom(observable);
    let dataList = response.data.data.list   //丹药、药材的详细信息集合

    //循环计算NFT数量，丹药集合，药材集合
    for (let i = 0; i < dataList.length; i++) {
      nft = nft + parseInt(dataList[i].amount)

      //获取owner,contract,tokenId,amount信息
      let { owner, contract, tokenId, amount } = dataList[i]
      //获取name,description,image 信息
      let { name, description, image } = dataList[i].rawData.metadata
      // 获取attributes数组
      let attributes = dataList[i].rawData.metadata.attributes
      // let newMetada = [...attributes, { "trait_type": "类型", "value": "药材" }]  //nft 后台还未添加类型，业务需要暂时手动添加

      let dataMap = new Map();
      let type = "";  // 类型 判断数据为药材  还是丹药
      for (let i = 0; i < attributes.length; i++) {
        if (attributes[i].trait_type == "类型") {
          type = attributes[i].value
        }
        dataMap.set(attributes[i].trait_type, attributes[i].value)
      }

    let map = Array.from(dataMap)
    if (type == "药材") {
        yaoList.push({ ...{ owner, contract, tokenId, amount }, ...{ name, description, image }, map, type })
      } else {
        danList.push({ ...{ owner, contract, tokenId, amount }, ...{ name, description, image }, map, type })
      }
    }

    nftInfo.NFT = nft
    nftInfo.dan = danList.length
    nftInfo.yao = yaoList.length
    nftInfo.nftList = JSON.stringify({
      danList: danList,
      yaoList: yaoList
    })

    return nftInfo;
  }



  //获取钱包余额
  async getBalance(owner: String) {
    const conflux = new Conflux({
      url: 'https://test.confluxrpc.com', // testnet provider
      logger: console, // for debug: this will log all the RPC request and response to console
      networkId: 1,  // note networkId is required to initiat
      // timeout: 300 * 1000, // request timeout in ms, default 300*1000 ms === 5 minute
    });
    //const address = 'cfxtest:aakgg0bmkcbsbz3k9wb4v02zb65a54jxr6bs3awx85';
    const balance = await conflux.cfx.getBalance(owner);

    return new Drip(balance).toCFX()
  }

  //获取帐户地址的指定NFT合约的令牌id数组。 
  getTokens(contract: String, owner: String): Observable<any> {
    const url = 'https://api-testnet.confluxscan.net/nft/tokens';
    const params = {
      sort: "DESC",
      sortField: "latest_update_time",
      contract: contract,
      owner: owner,
      withMetadata: true,
    };
    return this.httpService.get(url, { params });
  }


}
