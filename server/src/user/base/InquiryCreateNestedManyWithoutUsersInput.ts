/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { InquiryWhereUniqueInput } from "../../inquiry/base/InquiryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class InquiryCreateNestedManyWithoutUsersInput {
  @Field(() => [InquiryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InquiryWhereUniqueInput],
  })
  connect?: Array<InquiryWhereUniqueInput>;
}

export { InquiryCreateNestedManyWithoutUsersInput as InquiryCreateNestedManyWithoutUsersInput };
