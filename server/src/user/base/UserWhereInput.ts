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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HubitusListRelationFilter } from "../../hubitus/base/HubitusListRelationFilter";
import { StatusListRelationFilter } from "../../status/base/StatusListRelationFilter";
import { GetpointListRelationFilter } from "../../getpoint/base/GetpointListRelationFilter";
import { UsepointListRelationFilter } from "../../usepoint/base/UsepointListRelationFilter";
import { MessageListRelationFilter } from "../../message/base/MessageListRelationFilter";
import { QuestionListRelationFilter } from "../../question/base/QuestionListRelationFilter";
import { EnumUserGender } from "./EnumUserGender";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  trueName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => HubitusListRelationFilter,
  })
  @ValidateNested()
  @Type(() => HubitusListRelationFilter)
  @IsOptional()
  @Field(() => HubitusListRelationFilter, {
    nullable: true,
  })
  hubituses?: HubitusListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => StatusListRelationFilter,
  })
  @ValidateNested()
  @Type(() => StatusListRelationFilter)
  @IsOptional()
  @Field(() => StatusListRelationFilter, {
    nullable: true,
  })
  statuses?: StatusListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => GetpointListRelationFilter,
  })
  @ValidateNested()
  @Type(() => GetpointListRelationFilter)
  @IsOptional()
  @Field(() => GetpointListRelationFilter, {
    nullable: true,
  })
  getpoints?: GetpointListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => UsepointListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UsepointListRelationFilter)
  @IsOptional()
  @Field(() => UsepointListRelationFilter, {
    nullable: true,
  })
  usepoints?: UsepointListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => MessageListRelationFilter,
  })
  @ValidateNested()
  @Type(() => MessageListRelationFilter)
  @IsOptional()
  @Field(() => MessageListRelationFilter, {
    nullable: true,
  })
  messages?: MessageListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => QuestionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => QuestionListRelationFilter)
  @IsOptional()
  @Field(() => QuestionListRelationFilter, {
    nullable: true,
  })
  questions?: QuestionListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  oauthType?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  openId?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  sessionKey?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  unionId?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  inviterId?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  phone?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  nickName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  avatarUrl?: StringNullableFilter;

  @ApiProperty({
    required: false,
    enum: EnumUserGender,
  })
  @IsEnum(EnumUserGender)
  @IsOptional()
  @Field(() => EnumUserGender, {
    nullable: true,
  })
  gender?: "Unknown" | "Male" | "Female";

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  birthday?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  userIdCard?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  country?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  province?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  city?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  language?: StringNullableFilter;
}

export { UserWhereInput as UserWhereInput };
