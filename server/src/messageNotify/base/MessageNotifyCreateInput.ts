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
import { EventLogWhereUniqueInput } from "../../eventLog/base/EventLogWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsBoolean,
  IsString,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class MessageNotifyCreateInput {
  @ApiProperty({
    required: false,
    type: () => EventLogWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EventLogWhereUniqueInput)
  @IsOptional()
  @Field(() => EventLogWhereUniqueInput, {
    nullable: true,
  })
  event?: EventLogWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isNew!: boolean;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  messageContent!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  messageSource!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  messageType!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  sendTime!: Date;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { MessageNotifyCreateInput as MessageNotifyCreateInput };
