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
import { GetpointWhereInput } from "./GetpointWhereInput";
import { Type } from "class-transformer";
import { GetpointOrderByInput } from "./GetpointOrderByInput";

@ArgsType()
class GetpointFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GetpointWhereInput,
  })
  @Field(() => GetpointWhereInput, { nullable: true })
  @Type(() => GetpointWhereInput)
  where?: GetpointWhereInput;

  @ApiProperty({
    required: false,
    type: [GetpointOrderByInput],
  })
  @Field(() => [GetpointOrderByInput], { nullable: true })
  @Type(() => GetpointOrderByInput)
  orderBy?: Array<GetpointOrderByInput>;

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

export { GetpointFindManyArgs as GetpointFindManyArgs };