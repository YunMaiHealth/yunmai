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
  IsOptional,
  IsJSON,
  IsDate,
  ValidateNested,
} from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { Type } from "class-transformer";
import { MessageNotify } from "../../messageNotify/base/MessageNotify";

@ObjectType()
class EventLog {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  eventName!: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  eventParam!: JsonValue;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  eventTime!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  eventType!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [MessageNotify],
  })
  @ValidateNested()
  @Type(() => MessageNotify)
  @IsOptional()
  messageNotifies?: Array<MessageNotify>;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  relateUser!: JsonValue;
}

export { EventLog as EventLog };
