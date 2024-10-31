import { Module } from "@nestjs/common";
import { MarketplaceEntryModuleBase } from "./base/marketplaceEntry.module.base";
import { MarketplaceEntryService } from "./marketplaceEntry.service";
import { MarketplaceEntryController } from "./marketplaceEntry.controller";
import { MarketplaceEntryResolver } from "./marketplaceEntry.resolver";

@Module({
  imports: [MarketplaceEntryModuleBase],
  controllers: [MarketplaceEntryController],
  providers: [MarketplaceEntryService, MarketplaceEntryResolver],
  exports: [MarketplaceEntryService],
})
export class MarketplaceEntryModule {}
