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
import { IsDate, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { MessageNotifyWhereUniqueInput } from "../../messageNotify/base/MessageNotifyWhereUniqueInput";

@InputType()
class EventLogCreateInput {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  eventTime!: Date;

  @ApiProperty({
    required: false,
    type: () => MessageNotifyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MessageNotifyWhereUniqueInput)
  @IsOptional()
  @Field(() => MessageNotifyWhereUniqueInput, {
    nullable: true,
  })
  messageNotifies?: MessageNotifyWhereUniqueInput | null;
}

export { EventLogCreateInput as EventLogCreateInput };
