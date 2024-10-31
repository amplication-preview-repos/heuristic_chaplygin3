/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { MarketplaceEntryService } from "../marketplaceEntry.service";
import { MarketplaceEntryCreateInput } from "./MarketplaceEntryCreateInput";
import { MarketplaceEntry } from "./MarketplaceEntry";
import { MarketplaceEntryFindManyArgs } from "./MarketplaceEntryFindManyArgs";
import { MarketplaceEntryWhereUniqueInput } from "./MarketplaceEntryWhereUniqueInput";
import { MarketplaceEntryUpdateInput } from "./MarketplaceEntryUpdateInput";

export class MarketplaceEntryControllerBase {
  constructor(protected readonly service: MarketplaceEntryService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MarketplaceEntry })
  async createMarketplaceEntry(
    @common.Body() data: MarketplaceEntryCreateInput
  ): Promise<MarketplaceEntry> {
    return await this.service.createMarketplaceEntry({
      data: data,
      select: {
        createdAt: true,
        id: true,
        price: true,
        rating: true,
        serviceType: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MarketplaceEntry] })
  @ApiNestedQuery(MarketplaceEntryFindManyArgs)
  async marketplaceEntries(
    @common.Req() request: Request
  ): Promise<MarketplaceEntry[]> {
    const args = plainToClass(MarketplaceEntryFindManyArgs, request.query);
    return this.service.marketplaceEntries({
      ...args,
      select: {
        createdAt: true,
        id: true,
        price: true,
        rating: true,
        serviceType: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MarketplaceEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async marketplaceEntry(
    @common.Param() params: MarketplaceEntryWhereUniqueInput
  ): Promise<MarketplaceEntry | null> {
    const result = await this.service.marketplaceEntry({
      where: params,
      select: {
        createdAt: true,
        id: true,
        price: true,
        rating: true,
        serviceType: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: MarketplaceEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMarketplaceEntry(
    @common.Param() params: MarketplaceEntryWhereUniqueInput,
    @common.Body() data: MarketplaceEntryUpdateInput
  ): Promise<MarketplaceEntry | null> {
    try {
      return await this.service.updateMarketplaceEntry({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          price: true,
          rating: true,
          serviceType: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: MarketplaceEntry })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMarketplaceEntry(
    @common.Param() params: MarketplaceEntryWhereUniqueInput
  ): Promise<MarketplaceEntry | null> {
    try {
      return await this.service.deleteMarketplaceEntry({
        where: params,
        select: {
          createdAt: true,
          id: true,
          price: true,
          rating: true,
          serviceType: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}