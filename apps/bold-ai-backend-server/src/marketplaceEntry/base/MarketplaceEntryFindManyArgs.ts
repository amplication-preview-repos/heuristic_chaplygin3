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
import { MarketplaceEntryWhereInput } from "./MarketplaceEntryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MarketplaceEntryOrderByInput } from "./MarketplaceEntryOrderByInput";

@ArgsType()
class MarketplaceEntryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MarketplaceEntryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MarketplaceEntryWhereInput, { nullable: true })
  @Type(() => MarketplaceEntryWhereInput)
  where?: MarketplaceEntryWhereInput;

  @ApiProperty({
    required: false,
    type: [MarketplaceEntryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MarketplaceEntryOrderByInput], { nullable: true })
  @Type(() => MarketplaceEntryOrderByInput)
  orderBy?: Array<MarketplaceEntryOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MarketplaceEntryFindManyArgs as MarketplaceEntryFindManyArgs };
