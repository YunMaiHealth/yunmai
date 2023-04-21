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
import { IsOptional, IsEnum, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnumUserGender } from "./EnumUserGender";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { HabitusListRelationFilter } from "../../habitus/base/HabitusListRelationFilter";
import { StatusListRelationFilter } from "../../status/base/StatusListRelationFilter";
import { IncomeMetaGasListRelationFilter } from "../../incomeMetaGas/base/IncomeMetaGasListRelationFilter";
import { MessageListRelationFilter } from "../../message/base/MessageListRelationFilter";
import { ExpenseMetaGasListRelationFilter } from "../../expenseMetaGas/base/ExpenseMetaGasListRelationFilter";
import { InquiryListRelationFilter } from "../../inquiry/base/InquiryListRelationFilter";

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
  oauthType?: StringFilter;

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
    enum: EnumUserGender,
  })
  @IsEnum(EnumUserGender)
  @IsOptional()
  @Field(() => EnumUserGender, {
    nullable: true,
  })
  gender?: "UNKNOWN" | "MALE" | "FEMALE";

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
  identitycard?: StringNullableFilter;

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
  language?: StringNullableFilter;

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
  realName?: StringNullableFilter;

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
    type: () => HabitusListRelationFilter,
  })
  @ValidateNested()
  @Type(() => HabitusListRelationFilter)
  @IsOptional()
  @Field(() => HabitusListRelationFilter, {
    nullable: true,
  })
  habituses?: HabitusListRelationFilter;

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
    type: () => IncomeMetaGasListRelationFilter,
  })
  @ValidateNested()
  @Type(() => IncomeMetaGasListRelationFilter)
  @IsOptional()
  @Field(() => IncomeMetaGasListRelationFilter, {
    nullable: true,
  })
  incomeMetaGases?: IncomeMetaGasListRelationFilter;

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
    type: () => ExpenseMetaGasListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ExpenseMetaGasListRelationFilter)
  @IsOptional()
  @Field(() => ExpenseMetaGasListRelationFilter, {
    nullable: true,
  })
  expenseMetaGases?: ExpenseMetaGasListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => InquiryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => InquiryListRelationFilter)
  @IsOptional()
  @Field(() => InquiryListRelationFilter, {
    nullable: true,
  })
  inquirys?: InquiryListRelationFilter;
}

export { UserWhereInput as UserWhereInput };
