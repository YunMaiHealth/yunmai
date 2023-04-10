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
import { IsString, IsDate, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { User } from "../../user/base/User";
import { UserQuestion } from "../../userQuestion/base/UserQuestion";

@ObjectType()
class ReplyQuestion {
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
    type: String,
  })
  @IsString()
  @Field(() => String)
  isPublic!: string;

  @ApiProperty({
    required: true,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  replyUser?: User;

  @ApiProperty({
    required: false,
    type: () => UserQuestion,
  })
  @ValidateNested()
  @Type(() => UserQuestion)
  @IsOptional()
  userQuestion?: UserQuestion | null;
}

export { ReplyQuestion as ReplyQuestion };