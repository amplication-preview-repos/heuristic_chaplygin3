import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MarketplaceEntryServiceBase } from "./base/marketplaceEntry.service.base";

@Injectable()
export class MarketplaceEntryService extends MarketplaceEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
