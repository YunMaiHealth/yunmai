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
  IsJSON,
} from "class-validator";
import { Type } from "class-transformer";
import { User } from "../../user/base/User";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";

@ObjectType()
class Hubitus {
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
  testTime!: Date;

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
  currentHabitus!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSON)
  testResult!: JsonValue;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSON)
  countResult!: JsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  suggest!: string | null;
}

export { Hubitus as Hubitus };
