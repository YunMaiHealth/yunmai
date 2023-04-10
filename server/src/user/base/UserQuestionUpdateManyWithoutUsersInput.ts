/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UserQuestionWhereUniqueInput } from "../../userQuestion/base/UserQuestionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class UserQuestionUpdateManyWithoutUsersInput {
  @Field(() => [UserQuestionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserQuestionWhereUniqueInput],
  })
  connect?: Array<UserQuestionWhereUniqueInput>;

  @Field(() => [UserQuestionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserQuestionWhereUniqueInput],
  })
  disconnect?: Array<UserQuestionWhereUniqueInput>;

  @Field(() => [UserQuestionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UserQuestionWhereUniqueInput],
  })
  set?: Array<UserQuestionWhereUniqueInput>;
}

export { UserQuestionUpdateManyWithoutUsersInput as UserQuestionUpdateManyWithoutUsersInput };
