/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { GetPointWhereUniqueInput } from "../../getPoint/base/GetPointWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class GetPointUpdateManyWithoutUsersInput {
  @Field(() => [GetPointWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GetPointWhereUniqueInput],
  })
  connect?: Array<GetPointWhereUniqueInput>;

  @Field(() => [GetPointWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GetPointWhereUniqueInput],
  })
  disconnect?: Array<GetPointWhereUniqueInput>;

  @Field(() => [GetPointWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [GetPointWhereUniqueInput],
  })
  set?: Array<GetPointWhereUniqueInput>;
}

export { GetPointUpdateManyWithoutUsersInput as GetPointUpdateManyWithoutUsersInput };