/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IncomeMetaGasWhereInput } from "./IncomeMetaGasWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class IncomeMetaGasListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => IncomeMetaGasWhereInput,
  })
  @ValidateNested()
  @Type(() => IncomeMetaGasWhereInput)
  @IsOptional()
  @Field(() => IncomeMetaGasWhereInput, {
    nullable: true,
  })
  every?: IncomeMetaGasWhereInput;

  @ApiProperty({
    required: false,
    type: () => IncomeMetaGasWhereInput,
  })
  @ValidateNested()
  @Type(() => IncomeMetaGasWhereInput)
  @IsOptional()
  @Field(() => IncomeMetaGasWhereInput, {
    nullable: true,
  })
  some?: IncomeMetaGasWhereInput;

  @ApiProperty({
    required: false,
    type: () => IncomeMetaGasWhereInput,
  })
  @ValidateNested()
  @Type(() => IncomeMetaGasWhereInput)
  @IsOptional()
  @Field(() => IncomeMetaGasWhereInput, {
    nullable: true,
  })
  none?: IncomeMetaGasWhereInput;
}
export { IncomeMetaGasListRelationFilter as IncomeMetaGasListRelationFilter };