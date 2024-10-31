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
import { AiAgentWhereInput } from "./AiAgentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AiAgentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AiAgentWhereInput,
  })
  @ValidateNested()
  @Type(() => AiAgentWhereInput)
  @IsOptional()
  @Field(() => AiAgentWhereInput, {
    nullable: true,
  })
  every?: AiAgentWhereInput;

  @ApiProperty({
    required: false,
    type: () => AiAgentWhereInput,
  })
  @ValidateNested()
  @Type(() => AiAgentWhereInput)
  @IsOptional()
  @Field(() => AiAgentWhereInput, {
    nullable: true,
  })
  some?: AiAgentWhereInput;

  @ApiProperty({
    required: false,
    type: () => AiAgentWhereInput,
  })
  @ValidateNested()
  @Type(() => AiAgentWhereInput)
  @IsOptional()
  @Field(() => AiAgentWhereInput, {
    nullable: true,
  })
  none?: AiAgentWhereInput;
}
export { AiAgentListRelationFilter as AiAgentListRelationFilter };
