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
import {
  IsString,
  IsOptional,
  IsJSON,
  IsEnum,
  IsDate,
  ValidateNested,
} from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumUserGender } from "./EnumUserGender";
import { Type } from "class-transformer";
import { UserStatusUpdateManyWithoutUsersInput } from "./UserStatusUpdateManyWithoutUsersInput";
import { HubitusCheckupUpdateManyWithoutUsersInput } from "./HubitusCheckupUpdateManyWithoutUsersInput";
import { MessageNotifyUpdateManyWithoutUsersInput } from "./MessageNotifyUpdateManyWithoutUsersInput";
import { UserQuestionUpdateManyWithoutUsersInput } from "./UserQuestionUpdateManyWithoutUsersInput";
import { ReplyQuestionUpdateManyWithoutUsersInput } from "./ReplyQuestionUpdateManyWithoutUsersInput";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  oauthType?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  openId?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sessionKey?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  unionId?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  trueName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  inviterId?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  province?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nickName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  avatarUrl?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumUserGender,
  })
  @IsEnum(EnumUserGender)
  @IsOptional()
  @Field(() => EnumUserGender, {
    nullable: true,
  })
  gender?: "Unknown" | "Male" | "Female" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  birthday?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  city?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  userIdCard?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  country?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  language?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  creatTime?: Date;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  lastLoginTime?: Date;

  @ApiProperty({
    required: false,
    type: () => UserStatusUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserStatusUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserStatusUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  userStatuses?: UserStatusUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => HubitusCheckupUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => HubitusCheckupUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => HubitusCheckupUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  hubitusCheckups?: HubitusCheckupUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => MessageNotifyUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => MessageNotifyUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => MessageNotifyUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  messageNotifies?: MessageNotifyUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => UserQuestionUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserQuestionUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserQuestionUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  healthQuestions?: UserQuestionUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ReplyQuestionUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ReplyQuestionUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ReplyQuestionUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  replyQuestions?: ReplyQuestionUpdateManyWithoutUsersInput;
}

export { UserUpdateInput as UserUpdateInput };
