/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ReplyQuestionWhereUniqueInput } from "./ReplyQuestionWhereUniqueInput";
import { ReplyQuestionUpdateInput } from "./ReplyQuestionUpdateInput";

@ArgsType()
class UpdateReplyQuestionArgs {
  @Field(() => ReplyQuestionWhereUniqueInput, { nullable: false })
  where!: ReplyQuestionWhereUniqueInput;
  @Field(() => ReplyQuestionUpdateInput, { nullable: false })
  data!: ReplyQuestionUpdateInput;
}

export { UpdateReplyQuestionArgs as UpdateReplyQuestionArgs };