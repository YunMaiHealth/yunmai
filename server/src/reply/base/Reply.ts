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
  IsBoolean,
  ValidateNested,
  IsOptional,
} from "class-validator";
import { Type } from "class-transformer";
import { User } from "../../user/base/User";
import { Question } from "../../question/base/Question";

@ObjectType()
class Reply {
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
  replyTime!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  questionReply!: string;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  isPublic!: boolean;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  replyUser?: User;

  @ApiProperty({
    required: false,
    type: () => Question,
  })
  @ValidateNested()
  @Type(() => Question)
  @IsOptional()
  userQuestion?: Question | null;
}

export { Reply as Reply };
