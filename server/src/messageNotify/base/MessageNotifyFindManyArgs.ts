/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MessageNotifyWhereInput } from "./MessageNotifyWhereInput";
import { Type } from "class-transformer";
import { MessageNotifyOrderByInput } from "./MessageNotifyOrderByInput";

@ArgsType()
class MessageNotifyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MessageNotifyWhereInput,
  })
  @Field(() => MessageNotifyWhereInput, { nullable: true })
  @Type(() => MessageNotifyWhereInput)
  where?: MessageNotifyWhereInput;

  @ApiProperty({
    required: false,
    type: [MessageNotifyOrderByInput],
  })
  @Field(() => [MessageNotifyOrderByInput], { nullable: true })
  @Type(() => MessageNotifyOrderByInput)
  orderBy?: Array<MessageNotifyOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MessageNotifyFindManyArgs as MessageNotifyFindManyArgs };
