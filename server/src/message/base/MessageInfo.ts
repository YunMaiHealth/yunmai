/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsBoolean,
  IsDate,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { User } from "../../user/base/User";

@ObjectType()
class MessageInfo {

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  messageAction!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isRead!: boolean;

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
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
  
  @IsNumber()
  @Field(() => Number)
  numberOfUnread!:Number
}

export { MessageInfo as MessageInfo };
