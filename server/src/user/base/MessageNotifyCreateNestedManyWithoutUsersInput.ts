/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { MessageNotifyWhereUniqueInput } from "../../messageNotify/base/MessageNotifyWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class MessageNotifyCreateNestedManyWithoutUsersInput {
  @Field(() => [MessageNotifyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [MessageNotifyWhereUniqueInput],
  })
  connect?: Array<MessageNotifyWhereUniqueInput>;
}

export { MessageNotifyCreateNestedManyWithoutUsersInput as MessageNotifyCreateNestedManyWithoutUsersInput };