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
import { MessageNotifyWhereInput } from "./MessageNotifyWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MessageNotifyListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => MessageNotifyWhereInput,
  })
  @ValidateNested()
  @Type(() => MessageNotifyWhereInput)
  @IsOptional()
  @Field(() => MessageNotifyWhereInput, {
    nullable: true,
  })
  every?: MessageNotifyWhereInput;

  @ApiProperty({
    required: false,
    type: () => MessageNotifyWhereInput,
  })
  @ValidateNested()
  @Type(() => MessageNotifyWhereInput)
  @IsOptional()
  @Field(() => MessageNotifyWhereInput, {
    nullable: true,
  })
  some?: MessageNotifyWhereInput;

  @ApiProperty({
    required: false,
    type: () => MessageNotifyWhereInput,
  })
  @ValidateNested()
  @Type(() => MessageNotifyWhereInput)
  @IsOptional()
  @Field(() => MessageNotifyWhereInput, {
    nullable: true,
  })
  none?: MessageNotifyWhereInput;
}
export { MessageNotifyListRelationFilter as MessageNotifyListRelationFilter };
