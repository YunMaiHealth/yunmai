/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { IncomeMetaGasWhereUniqueInput } from "./IncomeMetaGasWhereUniqueInput";
import { IncomeMetaGasUpdateInput } from "./IncomeMetaGasUpdateInput";

@ArgsType()
class UpdateIncomeMetaGasArgs {
  @Field(() => IncomeMetaGasWhereUniqueInput, { nullable: false })
  where!: IncomeMetaGasWhereUniqueInput;
  @Field(() => IncomeMetaGasUpdateInput, { nullable: false })
  data!: IncomeMetaGasUpdateInput;
}

export { UpdateIncomeMetaGasArgs as UpdateIncomeMetaGasArgs };