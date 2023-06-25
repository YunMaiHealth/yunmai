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
  IsString,
  IsDate,
  ValidateNested,
  IsOptional,
  IsBoolean,
  IsJSON,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { User } from "../../user/base/User";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Event } from "../../event/base/Event";
import { EnumMessageMessageType } from "./EnumMessageMessageType";

@ObjectType()
class Message {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

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

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  messageSource!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isRead!: boolean;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSON)
  messageContent!: JsonValue;

  @ApiProperty({
    required: false,
    type: () => Event,
  })
  @ValidateNested()
  @Type(() => Event)
  @IsOptional()
  event?: Event | null;

  @ApiProperty({
    required: true,
    enum: EnumMessageMessageType,
  })
  @IsEnum(EnumMessageMessageType)
  @Field(() => EnumMessageMessageType, {
    nullable: true,
  })
  messageType?:
    | "FOLLOW_FRIEND"
    | "HEALTH_CHECK"
    | "UPDATE_HEALTH"
    | "REGISTER_NEWUSER"
    | "REFER_NEWUSER"
    | "HEALTH_INQUIRY";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  messageAction!: string;
}

export { Message as Message };
